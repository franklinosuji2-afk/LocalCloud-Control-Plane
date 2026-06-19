import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(4000, () => {
  console.log('LocalCloud Backend running on port 4000');
});
