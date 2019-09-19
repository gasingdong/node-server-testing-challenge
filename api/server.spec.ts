/* eslint-disable no-undef */
import request from 'supertest';
import db from '../database/db-config';
import server from './server';

beforeAll(async () => {
  await db.migrate.latest();
});

describe('server.js', () => {
  beforeEach(async () => {
    await db('messages').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET MESSAGES', () => {
    it('should return 200 OK', async () => {
      const res = await request(server).get('/api/messages');
      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/api/messages');
      expect(res.type).toMatch(/json/i);
    });
  });

  describe('POST MESSAGES', () => {
    it('should post messages', async () => {
      await request(server)
        .post('/api/messages')
        .send({ message: 'Hello world!' });
      const results = await db('messages');
      expect(results).toHaveLength(1);
    });

    it('should return matching id', async () => {
      const res = await request(server)
        .post('/api/messages')
        .send({ message: 'Hello world!' });
      const [id] = res.body;
      expect(id).toBe(1);
    });
  });

  describe('POST AND DELETE MESSAGES', () => {
    it('should delete message', async () => {
      await db('messages').insert({ message: 'Hello world!' });
      await request(server).delete('/api/messages/1');
      const size = (await db('messages')).length;
      expect(size).toBe(0);
    });

    it('should error 404 when deleting non-existent', async () => {
      const res = await request(server).delete('/api/messages/2');
      expect(res.status).toEqual(404);
    });
  });
});
