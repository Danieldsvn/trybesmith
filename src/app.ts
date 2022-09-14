import express from 'express';

import {
  create as ProductCreate,
  getAll as ProductGetAll,
} from './controllers/productController';

const app = express();

app.use(express.json());

app.post('/products', ProductCreate);
app.get('/products', ProductGetAll);
// app.post('/users', UserCreate);
//

export default app;
