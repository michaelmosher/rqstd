// author: michael mosher
// date: december 12, 2016
const bunyan = require('bunyan')
const logger = bunyan.createLogger({
  name: 'rqstd'
})

module.exports = logger
