import ProductCreate from '../models/productModel';
import Product from '../Interfaces/productInterface';

export default async function create(body: Product) {
  const { name, amount } = body;
  const result = await ProductCreate({ name, amount });

  return result;
}