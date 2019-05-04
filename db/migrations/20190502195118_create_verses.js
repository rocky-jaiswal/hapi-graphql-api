
exports.up = function(knex, Promise) {
  return knex.schema.createTable('verses', (table) => {

    table.increments('id').primary();
    table.text('text');
    table.text('book');
    table.integer('chapter');
    table.integer('verse');
    table.text('language');

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('verses');
};
