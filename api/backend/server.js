const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const listeFruits = ['🍍', '🥝', '🍒', '🍉'];

app.get('/fruits/liste', (req, res) => {
  res.json({ listeFruits });
});

app.listen(port, () => {
  console.log(`Backend prêt sur http://localhost:${port}`);
});
