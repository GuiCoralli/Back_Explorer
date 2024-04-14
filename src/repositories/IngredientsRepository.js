const knex = require("../database/knex");

class IngredientsRepository {
    async create({ name }) {
        const [ingredientsId] = await knex("ingredients").insert({ name });

        return ingredientsId;
    }

    async index() {
        const ingredients = await knex("ingredients").select();

        return ingredients;
    }

    async showIngredientsFoods(food_id) {
        const ingredients = await knex("ingredients")
          .select(["ingredients.id", "ingredients.name", "ingredients.image"])
          .innerJoin("foods_ingredients", "foods_ingredients.ingredient_id","ingredients.id")
          .where("foods_ingredients.food_id", food_id);
    
        return ingredients;
    }

    async findById(id) {
        const ingredients = await knex("ingredients").where({ id }).first();

    return ingredients;
    
    }

    async findByName(name) {
        const ingredients = await knex("ingredients").where({ name }).first();

        return ingredients;
    }

    async updateImage({ id, image }) {
        await knex("ingredients").update({ image }).where({ id });
    }
}

module.exports = IngredientsRepository;
