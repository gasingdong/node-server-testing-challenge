export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/messages.db3',
    },
    pool: {
      afterCreate: (conn: { run: Function }, done: Function): void => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: ':memory:',
    pool: {
      afterCreate: (conn: { run: Function }, done: Function): void => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
} as { [key: string]: {} };
