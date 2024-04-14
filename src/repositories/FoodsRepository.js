const knex = require ("../database/knex");


class FoodsRepository {
    async create({title, category, description, price }) {
        const { insertFood } = await knex("foods").insert({
            title,
            category,
            description,
            price,
        });
        
        return insertFood[0];
    }

    async returnAll()  {
        const foods = await knex("foods");

        return foods;
    }
    async findBySearch(search) {
        const foodsInfos = [
          "foods.id",
          "foods.title",
          "foods.description",
          "foods.price",
          "foods.image",
          "foods.category",
        ];
    
        const searchByFoodsTitle = await knex("foods")
          .select(foodsInfos)
          .whereLike("title", `%${search}%`);
    
        const searchByIngredients = await knex("foods")
          .select(foodsInfos)
          .innerJoin("foods_ingredients", "foods_ingredients.food_id", "foods.id")
          .innerJoin("ingredients","foods_ingredients.ingredient_id","ingredients.id")
          .whereLike("name", `%${search}%`);
    
        const  NoItemsDuplicatedInSearch= [...new Set(searchByFoodsTitle.concat(searchByIngredients)),];
    
        return NoItemsDuplicatedInSearch;
      }
    
      async findById(id) {
        const foodInfos = await knex("foods").where({ id }).first();
    
        return foodInfos;
      }
    
      async findByIds(ids) {
        const foodInfos = await knex("foods").whereIn("id", ids);
    
        return foodInfos;
      }
    
      async findByTitle(title) {
        const foodInfos = await knex("foods").where({ title }).first();
    
        return foodInfos;
      }
    
      async update({ id, title, description, price }) {
        await knex("foods")
          .update({
            title,
            description,
            price,
          })
          .where({ id });
    
        return;
      }
    
      async updateImage({ id, image }) {
        await knex("foods").update({ image }).where({ id });
      }
    
      async delete(id) {
        await knex("foods").delete().where({ id });
      }   
}

module.exports = FoodsRepository;