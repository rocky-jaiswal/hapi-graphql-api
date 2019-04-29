import * as Hapi from 'hapi';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return 'Hello World!';
    }
  }
];

export default routes;
