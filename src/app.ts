import express from 'express';

import ProductCreate from './controllers/productController';

const app = express();

app.use(express.json());

app.post('/products', ProductCreate);
//

export default app;
