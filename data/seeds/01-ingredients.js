exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'dough' },
    { ingredient_name: 'beef' },
    { ingredient_name: 'pasta' },
    { ingredient_name: 'egg' },
  ])
}
