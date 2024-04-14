
class FoodsIngredientsUpdateService {
  constructor(foodsIngredientsRepository) {
    this.foodsIngredientsRepository = foodsIngredientsRepository;
  }

  async execute({ food_id, ingredients }) {
    await this.foodsIngredientsRepository.delete(food_id);

    const ingredientsOfThisFood = ingredients.map(ingredient => {
      return {
        food_id,
        ingredient_id: ingredient.id,
      };
    });

    await this.foodsIngredientsRepository.create(ingredientsOfThisFood);
  }
}

module.exports = FoodsIngredientsUpdateService;