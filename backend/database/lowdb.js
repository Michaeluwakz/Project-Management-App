// backend/database/lowdb.js

import { Low, JSONFile } from 'lowdb';

const db = new Low(new JSONFile('db.json'));

async function initDb() {
  await db.read();
  db.data ||= { posts: [] };

  // Add a post
  db.data.posts.push({ id: 1, title: 'Hello World' });
  await db.write();

  console.log(db.data);
}

initDb();
