// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://default:ocihm5lPdtr9@ep-quiet-fire-a4kb6aii-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'pg',
    connection: "postgres://default:ocihm5lPdtr9@ep-quiet-fire-a4kb6aii-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: "postgres://default:ocihm5lPdtr9@ep-quiet-fire-a4kb6aii-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
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
    connection: "postgres://default:ocihm5lPdtr9@ep-quiet-fire-a4kb6aii-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require",
    
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
