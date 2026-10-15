import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function vendorDatabaseApi() {
  const getDbPath = () => path.resolve(process.cwd(), 'data', 'vendors.json')

  const readVendors = () => {
    const dbPath = getDbPath()
    if (!fs.existsSync(dbPath)) {
      const dir = path.dirname(dbPath)
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(dbPath, JSON.stringify([]), 'utf8')
      return []
    }
    try {
      const raw = fs.readFileSync(dbPath, 'utf8')
      return JSON.parse(raw || '[]')
    } catch (e) {
      return []
    }
  }

  const writeVendors = (vendors) => {
    const dbPath = getDbPath()
    const dir = path.dirname(dbPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(dbPath, JSON.stringify(vendors, null, 2), 'utf8')
  }

  const handleMiddleware = (req, res, next) => {
    const url = req.url || ''
    if (!url.startsWith('/api/vendor-registrations')) {
      return next()
    }

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    if (req.method === 'OPTIONS') {
      res.statusCode = 200
      return res.end()
    }

    if (req.method === 'GET' && (url === '/api/vendor-registrations' || url === '/api/vendor-registrations/')) {
      const vendors = readVendors()
      res.statusCode = 200
      return res.end(JSON.stringify(vendors))
    }

    if (req.method === 'POST' && (url === '/api/vendor-registrations' || url === '/api/vendor-registrations/')) {
      let body = ''
      req.on('data', chunk => { body += chunk })
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}')
          const vendors = readVendors()
          const newVendor = {
            id: payload.id || Date.now().toString(),
            submittedAt: payload.submittedAt || new Date().toISOString(),
            status: payload.status || 'Pending',
            ...payload
          }
          const updated = [newVendor, ...vendors.filter(v => v.id !== newVendor.id && v.refNumber !== newVendor.refNumber)]
          writeVendors(updated)
          res.statusCode = 201
          return res.end(JSON.stringify({ success: true, vendor: newVendor }))
        } catch (err) {
          res.statusCode = 400
          return res.end(JSON.stringify({ error: 'Invalid JSON payload' }))
        }
      })
      return
    }

    if (req.method === 'PATCH' && url.includes('/api/vendor-registrations/')) {
      const id = url.split('/api/vendor-registrations/')[1]?.split('?')[0]
      let body = ''
      req.on('data', chunk => { body += chunk })
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}')
          const vendors = readVendors()
          const updated = vendors.map(v => v.id === id ? { ...v, ...payload } : v)
          writeVendors(updated)
          res.statusCode = 200
          return res.end(JSON.stringify({ success: true }))
        } catch (err) {
          res.statusCode = 400
          return res.end(JSON.stringify({ error: 'Failed to update' }))
        }
      })
      return
    }

    if (req.method === 'DELETE' && url.includes('/api/vendor-registrations/')) {
      const id = url.split('/api/vendor-registrations/')[1]?.split('?')[0]
      const vendors = readVendors()
      const updated = vendors.filter(v => v.id !== id)
      writeVendors(updated)
      res.statusCode = 200
      return res.end(JSON.stringify({ success: true }))
    }

    return next()
  }

  return {
    name: 'vendor-database-api',
    configureServer(server) {
      server.middlewares.use(handleMiddleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleMiddleware)
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    vendorDatabaseApi()
  ],
  server: {
    proxy: {
      '/uploads': 'http://localhost:5000',
    },
  },
})
