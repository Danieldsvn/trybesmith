import { Request, Response } from 'express';
import {
  create as ProductCreate,
  getAll as ProductGetAll,
} from '../services/productService';

export async function create(request: Request, response: Response) {  
  const result = await ProductCreate(request.body);

  return response.status(201).json(result);
}

export async function getAll(request: Request, response: Response) {  
  const result = await ProductGetAll();

  return response.status(200).json(result);
}