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

server.delete('/api/messages/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await Messages.findById(Number(id));
    if (message) {
      await Messages.del(Number(id));
      res.status(200).json(message);
    } else {
      res.status(404).json({ message: 'does not exist' });
    }
  } catch (err) {
    next(err);
  }
});

export default server;
