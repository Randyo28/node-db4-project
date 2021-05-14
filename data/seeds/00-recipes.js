exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Cookies' },
    { recipe_name: 'Burger' },
    { recipe_name: 'Lasgana' },
  ])
}
