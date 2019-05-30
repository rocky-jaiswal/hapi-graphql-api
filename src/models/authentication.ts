import * as JWT from 'jsonwebtoken';
import * as Crypto from 'crypto';

export const SECRET = process.env['NODE_ENV'] === 'production' ? Crypto.randomBytes(512).toString('hex') : 'SECRET';
const DUMMY_ID = process.env['NODE_ENV'] === 'production' ? Crypto.randomBytes(256).toString('hex') : '101';

export const createToken = () => {
  return JWT.sign({ id: DUMMY_ID }, SECRET);
};

export const validateToken = async (decoded: any) => {
  return { isValid: decoded && decoded.id && decoded.id === DUMMY_ID };
};
