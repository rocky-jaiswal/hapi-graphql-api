import { Arg, Query, Resolver } from 'type-graphql';
import { getVersesFromDBForBookAndChapter } from '../repositories/verse';
import Verse from '../models/verse';

@Resolver()
class VerseResolver {
  @Query(returns => [Verse], { nullable: true })
  async getVersesForBookAndChapter (
    @Arg('book', { nullable: false }) book: string,
    @Arg('chapter', { nullable: false }) chapter: number
  ): Promise<Verse[]> {
    return getVersesFromDBForBookAndChapter(book, chapter);
  }
}

export default VerseResolver;
