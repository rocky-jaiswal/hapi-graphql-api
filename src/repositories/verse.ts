import DB from './db';

export const getVersesFromDBForBookAndChapter = async (book: string, chapter: number): Promise<{ book: string; chapter: number; verse: number; text: string; language: string; }[]> => {
  return DB('verses').where({ book, chapter }).orderBy('verse', 'language');
};
