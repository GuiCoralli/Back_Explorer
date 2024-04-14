
exports.up = knex => knex.schema.createTable("preferences", table => {
    table.integer("id");
    table.integer("food_id").references("id").inTable("foods").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");;

});

exports.down = knex => knex.schema.dropTable("preferences");