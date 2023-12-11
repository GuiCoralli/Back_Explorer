exports.up =knex.schema.createTable("users", table =>{
    table.increments("id");
})