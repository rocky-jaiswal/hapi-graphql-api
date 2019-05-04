import 'reflect-metadata';
import * as Hapi from 'hapi';
import { ApolloServer } from 'apollo-server-hapi';

import routes from './routes';
import bootstrapSchema from './schema';
import { SECRET, validateToken } from './models/authentication';

const init = async () => {

  const server = new Hapi.Server({
    port: 8080,
    host: 'localhost',
    routes: { cors: { origin: ['http://localhost:3000'] } }
  });

  // JWT plugin setup
  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: SECRET,
    validate: validateToken,
    verifyOptions: { algorithms: ['HS256'] }
  });
  server.auth.default('jwt');

  // GraphQL setup
  const schema = await bootstrapSchema();
  const apolloServer = new ApolloServer({
    schema,
    playground: true
  });
  await apolloServer.applyMiddleware({
    app: server
  });

  // Standard routes
  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
