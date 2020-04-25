import DB from './db'
import BookAndChapterCount from '../models/bookAndChapterCount'

export const getBooksAndChapterCount = async (): Promise<BookAndChapterCount[]> => {
  const books = await getBooks()
  const maxChapters = await Promise.all(
    books.map((book: string) => DB('verses').where({ book }).max('chapter'))
  )
  const chapterCounts = maxChapters.map((m: any) => Object.values(m[0])[0])
  return books.map((book: string, i: number) => new BookAndChapterCount(book, chapterCounts[i] as number))
}

export const getChaptersForBook = async (book: string): Promise<{ [key: string]: number }[]> => {
  return DB('verses').where({ book }).max('chapter')
}

export const getBooks = async (): Promise<string[]> => {
  // const books = await DB('verses').distinct('book');
  return [
    'Gen',
    'Exod',
    'Lev',
    'Num',
    'Deut',
    'Josh',
    'Judg',
    'Ruth',
    '1Sam',
    '2Sam',
    '1Kgs',
    '2Kgs',
    '1Chr',
    '2Chr',
    'Ezra',
    'Neh',
    'Esth',
    'Job',
    'Ps',
    'Prov',
    'Eccl',
    'Song',
    'Isa',
    'Jer',
    'Lam',
    'Ezek',
    'Dan',
    'Hos',
    'Joel',
    'Amos',
    'Obad',
    'Jonah',
    'Mic',
    'Nah',
    'Hab',
    'Zeph',
    'Hag',
    'Zech',
    'Mal',
    'Matt',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Rom',
    '1Cor',
    '2Cor',
    'Gal',
    'Eph',
    'Phil',
    'Col',
    '1Thess',
    '2Thess',
    '1Tim',
    '2Tim',
    'Titus',
    'Phlm',
    'Heb',
    'Jas',
    '1Pet',
    '2Pet',
    '1John',
    '2John',
    '3John',
    'Jude',
    'Rev',
  ]
}
