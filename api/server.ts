import express from 'express';
import Messages from './messages-model';

const server = express();

server.use(express.json());

server.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await Messages.find();
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
});

server.post('/api/messages', async (req, res, next) => {
  try {
    const saved = await Messages.add(req.body);
    res.status(200).json(saved);
  } catch (err) {
    next(err);
  }
});

server.delete('/api/messages', (req, res) => {});

export default server;
