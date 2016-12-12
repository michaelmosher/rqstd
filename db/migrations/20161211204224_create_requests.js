
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Requests', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.boolean('approved').default(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Requests')
}
