const express = require('express')

const server = express()

server.use(express.json())
server.use('*', (req, res) => {
  res.json('Recipe start')
})

module.exports = server
