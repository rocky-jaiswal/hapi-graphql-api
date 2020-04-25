import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Verse {
  constructor(book: string, chapter: number, verseNumber: number, text: string, language: string) {
    this.book = book
    this.chapter = chapter
    this.verseNumber = verseNumber
    this.text = text
    this.language = language
  }

  @Field()
  book!: string

  @Field()
  chapter!: number

  @Field()
  verseNumber!: number

  @Field()
  text!: string

  @Field()
  language!: string
}

export default Verse
