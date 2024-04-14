
class FoodsIngredientsCreateService {
  constructor(foodsIngredientsRepository) {
    this.foodsIngredientsRepository = foodsIngredientsRepository;
  }

  async execute({ foodId, ingredients }) {
    const ingredientsOfThisFood = ingredients.map( ingredient => {
      return {
        food_id: foodId,
        ingredient_id: ingredient.id,
      };
    });

    await this.foodsIngredientsRepository.create(ingredientsOfThisFood);
  };
}

module.exports = FoodsIngredientsCreateService;