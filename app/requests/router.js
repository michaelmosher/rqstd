// author: michael mosher
// date: december 12, 2016
'use strict'
const express = require('express')

var Request = require('./request')

class RequestRouter extends express.Router {
  constructor () {
    super()

    this.post('/request', create)
    this.get('/request', retrieveAll)
    this.get('/request/:id', retrieveOne)
  }
}

function create (req, res) {
  return new Request({
    title: req.body.title,
    description: req.body.description
  }).save()
  .then(request => {
    res.status(201).send(request)
  })
}

function retrieveAll (req, res) {
  return Request.fetchAll()
  .then(requests => {
    res.status(200).send(requests)
  })
}

function retrieveOne (req, res) {

}

module.exports = new RequestRouter()
