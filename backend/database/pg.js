// backend/database/pg.js
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const db = pgPromise()({
  host: process.env.DB_HOST,      // Read from .env
  port: process.env.DB_PORT,      // Read from .env
  database: process.env.DB_NAME,  // Read from .env
  user: process.env.DB_USER,      // Read from .env
  password: process.env.DB_PASSWORD, // Read from .env
});

export default db;
