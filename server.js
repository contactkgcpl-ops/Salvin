import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const dataDir = path.join(__dirname, 'data');
const machinesDbPath = path.join(dataDir, 'machines.json');
const machineAssetsDir = path.join(__dirname, 'public', 'assets', 'machines');
const distDir = path.join(__dirname, 'dist');

const allowedCategories = {
  Packaging: ["Pouch Packaging", "Vial Packaging", "Bottle Packaging", "Tube Packaging", "Eye Drop Packaging"],
  Processing: ["Spices Processing", "API Processing", "Food Processing", "Pharmaceutical Processing"]
};

function ensureStorage() {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.mkdirSync(machineAssetsDir, { recursive: true });
  if (!fs.existsSync(machinesDbPath)) {
    fs.writeFileSync(machinesDbPath, '[]\n');
  }
}

function readMachines() {
  ensureStorage();
  try {
    return JSON.parse(fs.readFileSync(machinesDbPath, 'utf8'));
  } catch {
    return [];
  }
}

function writeMachines(machines) {
  ensureStorage();
  fs.writeFileSync(machinesDbPath, `${JSON.stringify(machines, null, 2)}\n`);
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function uniqueSlug(baseSlug, machines, currentId = null) {
  const base = slugify(baseSlug) || `machine-${Date.now()}`;
  let slug = base;
  let counter = 2;
  while (machines.some((machine) => machine.slug === slug && machine.machine_id !== currentId)) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  return slug;
}

function parseSpecifications(value) {
  if (!value) return {};
  if (typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use(express.static(distDir));

// Root route for testing
app.get('/', (req, res) => {
  res.send('Salvin API is running. Machine API at /api/machines');
});

// Configure storage for Multer to save in PUBLIC folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureStorage();
    cb(null, machineAssetsDir);
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const baseName = slugify(req.body.machine_name || req.body.fileName || path.basename(file.originalname, extension));
    const customName = `${baseName || 'machine'}-${Date.now()}${extension.toLowerCase()}`;
    cb(null, customName);
  }
});

const upload = multer({ storage });

app.get('/api/machines', (req, res) => {
  const machines = readMachines();
  res.json(machines);
});

app.get('/api/machines/:slug', (req, res) => {
  const machines = readMachines();
  const machine = machines.find((item) => item.slug === req.params.slug);
  if (!machine) {
    return res.status(404).json({ error: 'Machine not found' });
  }
  res.json(machine);
});

app.post('/api/machines', upload.single('image'), (req, res) => {
  const machines = readMachines();
  const machineName = String(req.body.machine_name || '').trim();
  const category = String(req.body.category_id || '').trim();
  const subcategory = String(req.body.subcategory || '').trim();

  if (!machineName) {
    return res.status(400).json({ error: 'Machine name is required' });
  }
  if (!allowedCategories[category]) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  if (!allowedCategories[category].includes(subcategory)) {
    return res.status(400).json({ error: 'Invalid subcategory' });
  }

  const slug = uniqueSlug(req.body.slug || machineName, machines);
  const imageUrl = req.file ? `/assets/machines/${req.file.filename}` : String(req.body.image_url || '').trim();
  const description = String(req.body.description || '').trim();
  const newMachine = {
    machine_id: Date.now(),
    machine_name: machineName,
    description,
    category_id: category,
    subcategory,
    image_url: imageUrl,
    slug,
    meta_title: String(req.body.meta_title || machineName).trim(),
    meta_description: String(req.body.meta_description || description).trim(),
    specifications: parseSpecifications(req.body.specifications),
    status: String(req.body.status || 'active').trim(),
    tags: [category, subcategory],
    created_at: new Date().toISOString()
  };

  writeMachines([newMachine, ...machines]);
  res.status(201).json(newMachine);
});

app.delete('/api/machines/:machineId', (req, res) => {
  const machineId = Number(req.params.machineId);
  const machines = readMachines();
  const nextMachines = machines.filter((machine) => Number(machine.machine_id) !== machineId);

  if (nextMachines.length === machines.length) {
    return res.status(404).json({ error: 'Machine not found' });
  }

  writeMachines(nextMachines);
  res.json({ success: true });
});

// API Route to handle machine image upload
app.post('/api/upload-machine', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Return the public URL path
  const publicPath = `/assets/machines/${req.file.filename}`;
  console.log(`Saved file to public: ${publicPath}`);

  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    url: publicPath
  });
});

app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    return res.status(404).send('Frontend build not found. Run npm run build first.');
  }
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Salvin Public Asset Server running on http://localhost:${PORT}`);
});
