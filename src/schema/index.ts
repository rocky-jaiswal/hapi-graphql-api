import { buildSchema } from 'type-graphql';
import GreetingResolver from '../models/greeting';

export default async function bootstrapSchema () {
  return buildSchema({
    resolvers: [GreetingResolver],
    emitSchemaFile: true
  });
}
