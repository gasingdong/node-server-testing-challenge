import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../knexfile');

const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
