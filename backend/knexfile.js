// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'postgresql',
    connection: {
      filename: './src/database/teste.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    debug: true,
    connection:"postgres://default:ocihm5lPdtr9@ep-quiet-fire-a4kb6aii-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'  // <-- here
    },
    ssl: true
  }

};
