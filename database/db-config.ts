import knex from 'knex';
import config from '../knexfile';

const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
