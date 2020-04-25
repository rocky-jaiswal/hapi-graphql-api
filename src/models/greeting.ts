import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Greeting {
  @Field()
  response: string

  constructor(response: string) {
    this.response = response
  }
}

export default Greeting
