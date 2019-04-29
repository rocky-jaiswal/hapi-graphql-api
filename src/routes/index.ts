import * as Hapi from 'hapi';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return { healthy: true };
    }
  }
];

export default routes;
