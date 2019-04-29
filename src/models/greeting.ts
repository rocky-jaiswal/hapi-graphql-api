import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';

// @ObjectType()
// class Greeting {
//   @Field()
//   greeter: string;
// }

@Resolver()
export default class GreetingResolver {
  @Query(returns => String, { nullable: true })
  greet (to: String): string {
    return `Hello World!`;
  }
}
