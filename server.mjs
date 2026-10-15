import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'data', 'vendors.json');

function ensureDb() {
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify([]), 'utf8');
}

function readVendors() {
  ensureDb();
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8') || '[]');
  } catch {
    return [];
  }
}

function writeVendors(vendors) {
  ensureDb();
  fs.writeFileSync(DB_FILE, JSON.stringify(vendors, null, 2), 'utf8');
}

const server = http.createServer((req, res) => {
  const url = req.url || '';

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  if (url.startsWith('/api/vendor-registrations')) {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
      const vendors = readVendors();
      res.writeHead(200);
      return res.end(JSON.stringify(vendors));
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const vendors = readVendors();
          const newVendor = {
            id: payload.id || Date.now().toString(),
            submittedAt: payload.submittedAt || new Date().toISOString(),
            status: payload.status || 'Pending',
            ...payload
          };
          const updated = [newVendor, ...vendors.filter((v) => v.id !== newVendor.id && v.refNumber !== newVendor.refNumber)];
          writeVendors(updated);
          res.writeHead(201);
          return res.end(JSON.stringify({ success: true, vendor: newVendor }));
        } catch {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
        }
      });
      return;
    }

    if (req.method === 'PATCH') {
      const id = url.split('/api/vendor-registrations/')[1]?.split('?')[0];
      let body = '';
      req.on('data', (chunk) => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const vendors = readVendors();
          const updated = vendors.map((v) => (v.id === id ? { ...v, ...payload } : v));
          writeVendors(updated);
          res.writeHead(200);
          return res.end(JSON.stringify({ success: true }));
        } catch {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: 'Update failed' }));
        }
      });
      return;
    }

    if (req.method === 'DELETE') {
      const id = url.split('/api/vendor-registrations/')[1]?.split('?')[0];
      const vendors = readVendors();
      const updated = vendors.filter((v) => v.id !== id);
      writeVendors(updated);
      res.writeHead(200);
      return res.end(JSON.stringify({ success: true }));
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`Salvin Database API Server running on port ${PORT}`);
});
