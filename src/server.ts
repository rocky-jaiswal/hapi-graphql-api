import * as Hapi from 'hapi';

import routes from './routes';

const init = async () => {

  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
