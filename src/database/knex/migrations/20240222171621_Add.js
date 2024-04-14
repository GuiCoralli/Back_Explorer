exports.up = knex => knex.schema.alterTable("foods", table => {
    table.text("category");
  });

exports.down = knex => knex.schema.alterTable("foods", table => {
    table.dropColumn("category");
  });