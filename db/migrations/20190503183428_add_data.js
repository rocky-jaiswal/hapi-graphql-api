const germanVerses = require('./../../data/bible-de.json');
const englishVerses = require('./../../data/bible-en.json');

exports.up = function(knex, Promise) {
  const p1 = germanVerses.map(verse => {
    return knex('verses').insert({
      text: verse.text,
      book: verse.book,
      chapter: parseInt(verse.chapter),
      verse: parseInt(verse.verse),
      language: 'DE'
    });
  });

  const p2 = englishVerses.map(verse => {
    return knex('verses').insert({
      text: verse.text,
      book: verse.book,
      chapter: parseInt(verse.chapter),
      verse: parseInt(verse.verse),
      language: 'EN'
    });
  });

  return Promise.all(p1.concat(p2));
};

exports.down = function(knex, Promise) {
  return knex('verses').truncate();
};
