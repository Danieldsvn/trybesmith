import { Request, Response } from 'express';
import OrderGetAll from '../services/orderService';

export default async function getAll(_request: Request, response: Response) {  
  const result = await OrderGetAll();  

  return response.status(200).json(result);
}