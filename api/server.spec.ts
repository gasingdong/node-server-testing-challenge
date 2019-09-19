/* eslint-disable no-undef */
import db from '../database/db-config';

beforeAll(async () => {
  await db.migrate.latest();
});

describe('messages model', () => {
  beforeEach(async () => {
    await db('messages').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});
