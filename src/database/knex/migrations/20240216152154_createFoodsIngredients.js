exports.up = knex => knex.schema.createTable("foods_ingredients", table => {
    table.integer("id");
    table.integer("food_id").references("id").inTable("foods").onDelete("CASCADE");
    table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("foods_ingredients");