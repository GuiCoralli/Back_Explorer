exports.up = knex => knex.schema.createTable("foods", table => {
    table.integer("id");
    table.text("title").notnullable();
    table.text("category");
    table.text("description");
    table.float("price").notnullable();;
    table.varchar("image").defaultTo(null);
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("foods");
