const express = require('express')
const Recipe = require('./recipeModel')
const { checkRecipeId } = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
  Recipe.getAll()
    .then((recipe) => {
      res.json(recipe)
    })
    .catch(next)
})

router.get('/:id', checkRecipeId, (req, res, next) => {
  const { id } = req.params
  Recipe.getRecipeById(id)
    .then((recipe) => {
      res.json(recipe)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
