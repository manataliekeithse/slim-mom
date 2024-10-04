import express, { json } from 'express';
import logger from 'morgan';
import cors from 'cors';

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(json());

app.get('/', (_req, res) => {
	res.status(200).json({message: 'Hello from backend, hehe!'});
});

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, _req, res) => {
  res.status(500).json({ message: err.message })
});

export default app;
