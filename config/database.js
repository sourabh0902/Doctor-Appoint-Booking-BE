const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', // Force PostgreSQL
    connection: {
      host: env('DATABASE_HOST'), // From Supabase
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'doc_appoint'), // Default Supabase DB name
      user: env('DATABASE_USERNAME', 'postgres'), // Default Supabase user
      password: env('DATABASE_PASSWORD'), // Your Supabase password
      ssl: {
        rejectUnauthorized: false // Required for Supabase SSL
      },
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10)
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
