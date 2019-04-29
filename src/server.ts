import 'reflect-metadata';
import * as Hapi from 'hapi';
import { ApolloServer } from 'apollo-server-hapi';

import routes from './routes';
import bootstrapSchema from './schema';

const init = async () => {

  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  const schema = await bootstrapSchema();

  const apolloServer = new ApolloServer({
    schema,
    playground: true
  });

  await apolloServer.applyMiddleware({
    app: server
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
