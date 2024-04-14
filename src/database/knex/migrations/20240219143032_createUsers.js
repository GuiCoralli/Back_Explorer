exports.up = knex => knex.schema.createTable("users", table => {
    table.integer("id");
    table.text("name").notNullable();
    table.text("email").notNullable();
    table.varchar("password").notNullable();
    table.boolean("is_admin").defaultTo(false);
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");

/*PARA "id".references("user_id").inTable("preferences", "requests")*/