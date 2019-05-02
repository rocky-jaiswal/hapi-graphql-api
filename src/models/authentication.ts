import * as JWT from 'jsonwebtoken';
import * as Crypto from 'crypto';

export const SECRET = Crypto.randomBytes(512).toString('base64');
const DUMMY_ID = Crypto.randomBytes(256).toString('base64');

export const createToken = () => {
  return JWT.sign({ id: DUMMY_ID }, SECRET);
};

export const validateToken = async (decoded: any) => {
  return { isValid: decoded && decoded.id && decoded.id === DUMMY_ID };
};
