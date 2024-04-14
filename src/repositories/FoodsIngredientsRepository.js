const knex = require("../database/knex");

class FoodsIngredientsRepository {
  async create(foodsWithIngredients) {
    await knex("foods_ingredients").insert(foodsWithIngredients);
  }

  async delete(food_id) {
    await knex("foods_ingredients").delete().where({ food_id });
  }
}

module.exports = FoodsIngredientsRepository;