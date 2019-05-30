import { Arg, Query, Resolver } from 'type-graphql';
import Greeting from '../models/greeting';

@Resolver()
class GreetingResolver {
  @Query(returns => Greeting, { nullable: true })
  greeting (@Arg('to', { nullable: false }) to: string): Greeting {
    return new Greeting(`Hello, ${to}!`);
  }
}

export default GreetingResolver;
