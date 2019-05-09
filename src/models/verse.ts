import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Verse {
  @Field()
  book!: string;

  @Field()
  chapter!: number;

  @Field()
  verse!: number;

  @Field()
  text!: string;

  @Field()
  language!: string;
}

export default Verse;
