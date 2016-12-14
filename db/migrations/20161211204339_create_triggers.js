
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Triggers', function (table) {
    table.increments('id').primary()
    table.integer('request_id').references('Requests.id')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Triggers')
}
