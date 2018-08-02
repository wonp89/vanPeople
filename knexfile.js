// Update with your config settings.
const sharedConfig = {
  client: "postgresql",
  migrations: {
    tableName: "knex_migrations",
    directory: "./db/migrations"
  }
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      database: "vanPeople_dev"
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: "vanPeople_sta"
    }
  },

  production: {
    ...sharedConfig,
    connection: {
      database: "vanPeople_pro"
    }
  }
};
