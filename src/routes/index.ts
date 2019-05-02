import * as Hapi from 'hapi';
import { createToken } from '../models/authentication';

const routes = [
  {
    method: 'GET',
    path: '/',
    config: { auth: false },
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return { healthy: true };
    }
  },
  {
    method: 'POST',
    path: '/session',
    config: { auth: false },
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return { token: createToken() };
    }
  }
];

export default routes;
