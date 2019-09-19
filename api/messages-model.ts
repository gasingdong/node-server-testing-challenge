import { QueryBuilder } from 'knex';
import db from '../database/db-config';

const find = (): QueryBuilder => {
  return db('messages');
};

const add = (message: { message: string }): QueryBuilder => {
  return db('messages').insert(message, 'id');
};

export default {
  find,
  add,
};
