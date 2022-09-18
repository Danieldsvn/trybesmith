import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export default async function getAll() {
  const query = `
  SELECT 
    orders.id,
    orders.userId,
    products.id AS productsId
   FROM Trybesmith.Orders AS orders
   INNER JOIN Trybesmith.Products AS products
   ON orders.id = products.orderId
   GROUP BY products.id
  `;
  const result = await connection.execute<ResultSetHeader>(query);
  console.log(result[0]);
  return result[0];
} 