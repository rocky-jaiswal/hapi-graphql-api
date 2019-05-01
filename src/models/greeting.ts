import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
class Greeting {
  constructor (response: string) {
    this.response = response;
  }

  @Field()
  response: string;
}

@Resolver()
export default class GreetingResolver {
  @Query(returns => Greeting, { nullable: true })
  greet (@Arg('to', { nullable: false }) to: string): Greeting {
    const g = new Greeting(`Hello, ${to}!`);
    return g;
  }
}
