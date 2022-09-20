import OrderGetAll from '../models/orderModel';

export default async function getAll() {  
  const result = await OrderGetAll();
  console.log(result);

  return result;
}