import { buildSchema } from 'type-graphql';
import GreetingResolver from '../services/greetingResolver';
import VerseResolver from '../services/verseResolver';

export default async function bootstrapSchema () {
  return buildSchema({
    resolvers: [GreetingResolver, VerseResolver],
    emitSchemaFile: true
  });
}
