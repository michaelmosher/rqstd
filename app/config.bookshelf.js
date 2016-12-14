// author: michael mosher
// date: december 12, 2016
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf
