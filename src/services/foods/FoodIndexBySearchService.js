
class FoodIndexBySearchService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute(search) {
    let foundFoods;

    if (search) {
      foundFoods = this.foodsRepository.findBySearch(search);
    } else {
      foundFoods = this.foodsRepository.returnAll(search);
    }

    return foundFoods;
  }
}

module.exports = FoodIndexBySearchService;

