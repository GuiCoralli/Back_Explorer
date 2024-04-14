const AppError = require("../../utils/AppError");

class FoodCreateService {
  constructor(foodsRepository) {
    this.foodsRepository = foodsRepository;
  }

  async execute({ title, category, description, price }) {
    if (!title || !category || !description || !price) {
      throw new AppError("Para cadastrar um novo prato é preciso escrever todos os dados.");
    }

    const chosenNameRegistered = await this.foodsRepository.findByTitle(title);
    if (chosenNameRegistered) {
      throw new AppError("O título já está registrado.");
    }

    if (isNaN(price)) {
      throw new AppError("O preço é inválido.");
    }

    const foodId = await this.foodsRepository.create({
      title,
      category,
      description,
      price,
    });

    return foodId;
  }
}

module.exports = FoodCreateService;