import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import UserCreate from '../services/userService';

const secret = 'secret';

export default async function create(request: Request, response: Response) {  
  const result = await UserCreate(request.body);
  if (!result) {
    return response.status(500).json({ message: 'Something gone wrong' });
  }
  const { username, classe, level } = request.body;
  const user = { username, classe, level };
  const jwtConfig = { expiresIn: '8h', algorithm: 'HS256' };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  
  return response.status(201).json({ token });
}