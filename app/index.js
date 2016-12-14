// author: michael mosher
// date: december 12, 2016
'use strict'
var express = require('express')
const bodyParser = require('body-parser')

var requestsRouter = require('./requests/router')

var app = express()

app.use('/api', bodyParser.json())
app.use('/api', bodyParser.urlencoded({extended: false}))
app.use('/api', requestsRouter)

module.exports = app
