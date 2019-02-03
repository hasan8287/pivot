
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('item')
    table.integer('quantity')
    table.decimal('price')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order')
};
