import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../Interfaces/userInterface';

export default async function create({ username, classe, level, password }: User) {
  const query = `
  INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
  `;
  const result = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  return { id: result[0].insertId, username, classe, level, password };
} 