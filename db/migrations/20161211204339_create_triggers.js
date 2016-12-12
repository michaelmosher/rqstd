
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Triggers', function (table) {
    table.increments('id').primary()
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Triggers')
}
