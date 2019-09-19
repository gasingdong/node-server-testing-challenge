import { QueryBuilder } from 'knex';
import db from '../database/db-config';

const find = (): QueryBuilder => {
  return db('messages');
};

export default {
  find,
};
