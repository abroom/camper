import express from 'express';

const router = express.Router();

// Hello World
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

export default router;
