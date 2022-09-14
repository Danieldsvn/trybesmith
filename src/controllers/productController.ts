import { Request, Response } from 'express';
import ProductCreate from '../services/productService';

export default async function create(request: Request, response: Response) {
  // const { name, amount } = request.body;
  const result = await ProductCreate(request.body);

  return response.status(201).json(result);
}
