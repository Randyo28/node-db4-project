const express = require('express')
const tableRouter = require('./recipeRouter')

const server = express()

server.use(express.json())
server.use('/api/recipe', tableRouter)

server.use('*', (req, res) => {
  res.json('Recipe start')
})

module.exports = server
