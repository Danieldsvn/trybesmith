import {
  create as ProductCreate,
  getAll as ProductGetAll,
} from '../models/productModel';
import Product from '../Interfaces/productInterface';

export async function create(body: Product) {
  const { name, amount } = body;
  const result = await ProductCreate({ name, amount });

  return result;
}

export async function getAll() {  
  const result = await ProductGetAll();

  return result;
}