// author: michael mosher
// date: december 12, 2016
'use strict'
const bookshelf = require('../config.bookshelf')

module.exports = bookshelf.Model.extend({
  tableName: 'Requests'
})
