const AppError = require("../../utils/AppError");

class FoodUpdateService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute({ food_id, title, description, price, ingredients }) {
    if (!food_id || !title || !description || !price || !ingredients) {
      throw new AppError("Para atualizar o prato é preciso informar todos os dados.");
    }

    const foodInfos = await this.foodsRepository.findById(food_id);

    if (!foodInfos) {
      throw new AppError("Este prato não está cadastrado.");
    }

    const chosenNameRegistered = await this.foodsRepository.findByTitle(title);

    if (chosenNameRegistered && chosenNameRegistered.id !== foodInfos.id) {
      throw new AppError("O título já está registrado em outro prato");
    }

    if (isNaN(price)) {
      throw new AppError("O preço é inválido.");
    }

    const foodUpdated = {
      id: food_id,
      title,
      description,
      price,
    };

    await this.foodsRepository.update(foodUpdated);
  }
}

module.exports = FoodUpdateService;