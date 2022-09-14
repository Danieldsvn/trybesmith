import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../Interfaces/productInterface';

export async function create({ name, amount }: Product) {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const result = await connection.execute<ResultSetHeader>(query, [name, amount]);

  return { id: result[0].insertId, name, amount };
} 

export async function getAll() {
  const query = 'SELECT * FROM Trybesmith.Products';
  const result = await connection.execute<ResultSetHeader>(query);

  return result[0];
} 