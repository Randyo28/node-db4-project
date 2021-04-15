exports.seed = function (knex) {
  return knex('steps').insert([
    { step_number: 1, step_instructions: 'Soften Butter', recipe_id: 1 },
    { step_number: 2, step_instructions: 'Preheat the Oven', recipe_id: 1 },
    { step_number: 3, step_instructions: 'Line baking sheet', recipe_id: 1 },
    { step_number: 4, step_instructions: 'Mix Wet Ingredients', recipe_id: 1 },
    {
      step_number: 1,
      step_instructions: 'Mix beef with salt and pepper..',
      recipe_id: 2,
    },
    {
      step_number: 2,
      step_instructions:
        'Heat pan with oil at medium high for 8 mins both sides',
      recipe_id: 2,
    },
    {
      step_number: 1,
      step_instructions: 'Make layers of cheese, meat and sauce',
      recipe_id: 3,
    },
    {
      step_number: 2,
      step_instructions: 'Put in Oven for half hour at 400*',
      recipe_id: 3,
    },
  ])
}
