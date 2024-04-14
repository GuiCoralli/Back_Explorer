exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.integer("id");
    table.text("name").notNullable();
    table.text("image").defaultTo(null);
});

exports.down = knex => knex.schema.dropTable("ingredients");


/*references("ingredients_id").inTable("foods_ingredients");????*/