import express from 'express';

const server = express();

server.get('/api/messages', (req, res) => {});

server.post('/api/messages', (req, res) => {});

server.delete('/api/messages', (req, res) => {});

export default server;
