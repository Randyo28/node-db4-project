exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments('recipe_id')
      tbl.text('recipe_name', 128).notNullable()
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })

    .createTable('ingredients', (tbl) => {
      tbl.increments('ingredient_id')
      tbl.text('ingredient_name', 128).notNullable()
    })

    .createTable('steps', (tbl) => {
      tbl.increments('step_id')
      tbl.integer('step_number').notNullable()
      tbl.text('step_instructions', 128).notNullable()
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
    })

    .createTable('step_ingredients', (tbl) => {
      tbl.increments('step_ingred_id')
      tbl.integer('quantity')
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
      tbl
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
}
