import express from 'express';
import { client } from './db.js';  // Named import

const app = express();

// Your other code here, like routes, etc.

app.listen(5001, () => {
  console.log('Server started on port 5001');
});
