import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class BookAndChapterCount {
  constructor(book: string, chapterCount: number) {
    this.book = book
    this.chapterCount = chapterCount
  }

  @Field()
  book!: string

  @Field()
  chapterCount!: number
}

export default BookAndChapterCount
