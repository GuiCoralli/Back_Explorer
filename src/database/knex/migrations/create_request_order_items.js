exports.up = knex => knex.schema.createTable('request_order_items', table =>{

    table.increments('id')
    table.integer('plate_id').references('id').inTable('plates').onDelete('CASCADE')
    table.integer('request_order_id').references('id').inTable('requestorders').onDelete('CASCADE')
    table.integer('quantity')

}) 

exports.down = knex => knex.schema.dropTable('request_order_items') 
