import UserCreate from '../models/userModel';
import User from '../Interfaces/userInterface';

export default async function create(body: User) {
  const { username, classe, level, password } = body;
  const result = await UserCreate({ username, classe, level, password });
  if (result.id) return true;

  return false;
}