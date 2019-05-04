import Verse from '../models/verse';
import DB from './db';

export const getVersesFromDBForBookAndChapter = async (book: string, chapter: number): Promise<Verse[]> => {
  return DB('verses').where({ book, chapter });
};
