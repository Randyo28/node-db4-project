exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    { ingredient_id: 1, step_id: 1, quantity: 0.2 },
    { ingredient_id: 1, step_id: 1, quantity: 0.2 },
    { ingredient_id: 2, step_id: 2, quantity: 0.4 },
    { ingredient_id: 3, step_id: 3, quantity: 0.5 },
  ])
}
