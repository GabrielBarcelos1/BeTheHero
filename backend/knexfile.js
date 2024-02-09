// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.BASE_URL,
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'pg',
    connection: process.env.BASE_URL,
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: process.env.BASE_URL,
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
    connection: process.env.BASE_URL,
    
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
