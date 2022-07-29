import express from 'express';
import taskRoutes from './routes/tasks';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!');
  res.send('pong!');
});

app.get('/hello', (_req, res) => {
	console.log('a get request to the hello route');
	res.send('Task Manager App');
	
});

app.use('/api/v1/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});