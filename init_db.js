const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

(async () => {
    try {
        console.log('Connecting to Neon...');
        const client = await pool.connect();
        console.log('Connected!');

        console.log('Creating "tasks" table...');
        await client.query(createTableQuery);
        console.log('Table "tasks" created successfully!'); // Or already exists

        client.release();
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await pool.end();
    }
})();
