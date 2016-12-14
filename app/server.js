// author: michael mosher
// date: december 12, 2016
'use strict'
const app = require('./index')
const logger = require('./config.bunyan')

logger.info('server process starting')

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening
app.listen(3000, '127.0.0.1', function (error) {
  if (error) {
    logger.error('Unable to listen for connections', error)
    process.exit(10)
  }
  logger.info('express is listening on http://' +
    '127.0.0.1' + ':' + '3000')
})
