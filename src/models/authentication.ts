import * as JWT from 'jsonwebtoken';

export const SECRET = 'Secret@12345';
const DUMMY_ID = 101;

export const createToken = () => {
  return JWT.sign({ id: DUMMY_ID }, SECRET);
};

export const validateToken = async (decoded: any) => {
  if (!decoded.id || decoded.id !== DUMMY_ID) {
    return { isValid: false };
  }
  return { isValid: true };
};
