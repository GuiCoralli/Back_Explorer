const AppError = require("../../utils/AppError");

class FoodIndexByIdService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute(foods) {
    const onlyIds = foods.map(request => request.food_id);

    const foundFoods = await this.foodsRepository.findManyByIds(onlyIds);

    const FoodsNotFound = foundFoods.length === 0;

    if (FoodsNotFound) {
      throw new AppError("Alimentos informados não foram encontrados.");
    }

    return foundFoods;
  }
}

module.exports = FoodIndexByIdService;