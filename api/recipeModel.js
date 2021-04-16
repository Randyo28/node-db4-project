const db = require('../data/db-config')

function getAll() {
  return db('recipes')
}

async function getRecipeById(recipe_id) {
  const row = await db('recipes as rp')
    .leftJoin('steps as st', 'rp.recipe_id', 'st.recipe_id')
    .leftJoin('step_ingredients as si', 'st.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
    .select(
      'rp.recipe_id',
      'rp.recipe_name',
      'st.step_id',
      'st.step_number',
      'st.step_instructions',
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
    )
    .orderBy('st.step_number')
    .where('rp.recipe_id', recipe_id)

  return row
}

module.exports = {
  getAll,
  getRecipeById,
}
