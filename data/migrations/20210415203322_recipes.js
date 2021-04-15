exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments('recipe_id')
      tbl.text('recipe_name', 128).notNullable().unique()
      tbl.timestamp('created_at')
    })
    .createTable('')
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('')
    .dropTableIfExists('')
    .dropTableIfExists('')
    .dropTableIfExists('recipes')
}
