import { Arg, Query, Resolver } from 'type-graphql'

import { getVersesFromDBForBookAndChapter } from '../repositories/verse'
import Verse from '../models/verse'

@Resolver()
class VerseResolver {
  @Query((returns) => [Verse], { nullable: true })
  async verses(
    @Arg('book', { nullable: false }) book: string,
    @Arg('chapter', { nullable: false }) chapter: number
  ): Promise<Verse[]> {
    const verses = await getVersesFromDBForBookAndChapter(book, chapter)
    return verses.map(
      (v: { book: string; chapter: number; verse: number; text: string; language: string }) =>
        new Verse(v.book, v.chapter, v.verse, v.text, v.language)
    )
  }
}

export default VerseResolver
