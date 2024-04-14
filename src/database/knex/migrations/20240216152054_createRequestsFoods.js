
exports.up = knex => knex.schema.createTable("requests_foods", table => {
    table.integer("id");
    table.integer("request_id").references("id").inTable("requests");
    table.integer("food_id").references("id").inTable("foods");
    table.integer("food_amount");
});

exports.down = knex => knex.schema.dropTable("requests_foods");