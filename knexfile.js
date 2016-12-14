module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'rqstd',
    password: 'rqstd'
  },
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
}
