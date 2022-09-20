import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export default async function getAll() {
  const query = `
  SELECT 
    orders.id,
    orders.userId,
    JSON_ARRAYAGG(products.id) AS productsIds
   FROM Trybesmith.Orders AS orders
   INNER JOIN Trybesmith.Products AS products
   ON orders.id = products.orderId
   GROUP BY orders.id   
   ORDER BY orders.userId, orders.id 
  `;
  const result = await connection.execute<ResultSetHeader>(query);
  console.log(result[0]);

  return result[0];
} 