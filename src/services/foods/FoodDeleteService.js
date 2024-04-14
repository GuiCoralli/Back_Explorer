
class FoodDeleteService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute(food_id) {
    await this.foodsRepository.delete(food_id);
  }
}

module.exports = FoodDeleteService;