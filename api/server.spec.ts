/* eslint-disable no-undef */
import request from 'supertest';
import db from '../database/db-config';
import server from './server';

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

  it('should return 200 OK', async () => {
    const res = await request(server).get('/api/messages');
    expect(res.status).toBe(200);
  });

  it('should return JSON', async () => {
    const res = await request(server).get('/api/messages');
    expect(res.type).toMatch(/json/i);
  });
});
