const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.MCP_PORT || 3333;

app.get('/', (req, res) => {
  res.json({ status: 'mcp-server', uptime: process.uptime() });
});

app.get('/api/docs', (req, res) => {
  res.json({ name: 'Local MCP Server', version: '0.0.0', endpoints: ['/','/api/docs','/api/search'] });
});

app.get('/api/search', (req, res) => {
  const q = req.query.q || '';
  // simple demo response
  res.json({ query: q, results: [{ id: 1, title: `Result for ${q}` }] });
});

app.listen(PORT, () => console.log(`MCP server listening on http://localhost:${PORT}`));
