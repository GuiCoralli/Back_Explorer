exports.up =knex.schema.createTable("admin_access", table =>{
    table.increments("id");
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('password').notNullable()
    table.boolean('is_admin_access').notNullable()
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())


});


    exports.down = knex => knex.schema.dropTable('admin_access')  