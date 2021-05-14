const Recipe = require('./recipeModel')

const checkRecipeId = async (req, res, next) => {
  const { id } = req.params

  const recipe = await Recipe.getRecipeById(id)

  if (!recipe) {
    res.json({ message: `Recipe of id ${id} doesn't exist` })
  } else {
    req.recipe = recipe
    next()
  }
}

module.exports = {
  checkRecipeId,
}
