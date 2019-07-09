import { Pool } from 'pg';

export default function createPool() {
  // Remote
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
  }
  // Local
  return new Pool({
    host: 'db',
    user: 'postgres',
  });
}
