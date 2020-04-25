import { Query, Resolver, Int, Arg } from 'type-graphql'

import { getBooks, getChaptersForBook, getBooksAndChapterCount } from '../repositories/book'
import BookAndChapterCount from '../models/bookAndChapterCount'

@Resolver()
class BookResolver {
  @Query((returns) => [String], { nullable: true })
  async books(): Promise<String[]> {
    const books = await getBooks()
    return books
  }

  @Query((returns) => [BookAndChapterCount], { nullable: true })
  async getAllBooksAndChapters(): Promise<BookAndChapterCount[]> {
    const data = await getBooksAndChapterCount()
    return data
  }

  @Query((returns) => Int, { nullable: true })
  async chapters(@Arg('book', { nullable: false }) book: string): Promise<number> {
    const result = await getChaptersForBook(book)
    const key = Object.keys(result[0])[0]
    return result[0][key]
  }
}

export default BookResolver
