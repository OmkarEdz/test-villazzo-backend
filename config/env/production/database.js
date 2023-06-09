const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST', '0.0.0.0'),
//       port: env.int('PGPORT', 6582),
//       database: env('PGDATABASE', 'strapi'),
//       user: env('PGUSER', 'strapi'),
//       password: env('PGPASSWORD', 'password'),
//       ssl: env.bool(true),
//     },
//   },
// });
