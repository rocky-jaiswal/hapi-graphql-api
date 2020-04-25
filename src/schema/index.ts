import { buildSchema } from 'type-graphql'

import GreetingResolver from '../services/greetingResolver'
import VerseResolver from '../services/verseResolver'
import BookResolver from '../services/bookResolver'

export default async function bootstrapSchema() {
  return buildSchema({
    resolvers: [GreetingResolver, VerseResolver, BookResolver],
    emitSchemaFile: true,
  })
}
