
class FoodShowService {
  constructor(foodsRepository, ingredientsRepository) {
    this.foodsRepository = foodsRepository;
    this.ingredientsRepository = ingredientsRepository;
  }

  async execute(id) {
    const food = await this.foodsRepository.findById(id);

    const ingredients = await this.ingredientsRepository.showIngredientsOfAFood(id);

    const foodWithIngredients = {
      ...food,
      ingredients,
    };

    return foodWithIngredients;
  }
}

module.exports = FoodShowService;
