import { QueryBuilder } from 'knex';
import db from '../database/db-config';

const find = (): QueryBuilder => {
  return db('messages');
};

const findById = (id: number): QueryBuilder<{}, { message: string }> => {
  return db('messages')
    .where({ id })
    .first<{ message: string }>();
};

const add = (message: { message: string }): QueryBuilder => {
  return db('messages').insert(message, 'id');
};

const del = (id: number): QueryBuilder => {
  return db('messages')
    .where({ id })
    .delete();
};

export default {
  find,
  findById,
  add,
  del,
};
