import pkg from 'pg';
const { Client } = pkg;

// Your database configuration
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client.connect()
  .then(() => {
    console.log('Successfully connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL', err);
  });

export { client };  // Named export
