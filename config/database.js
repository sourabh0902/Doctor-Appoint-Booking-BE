const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), // Use Supabase connection string
      ssl: { rejectUnauthorized: false },
    },
    options: {
      useIPv4: true, // Force IPv4 to avoid ENETUNREACH
    },
  },
});
