const AppError = require("../../utils/AppError");

class IngredientsCreateService {
  constructor(ingredientsRepository) {
    this.ingredientsRepository = ingredientsRepository;
  }

  async execute({ name }) {
    const chosenNameIsInUse = await this.ingredientsRepository.findByName(name);

    if (chosenNameIsInUse) {
      throw new AppError("O nome do ingrediente escolhido está em uso.");
    }

    const ingredientId = await this.ingredientsRepository.create({ name });

    const ingredientInfos = {
      id: ingredientId,
      name,
      image: null,
    };

    return ingredientInfos;
  }
}

module.exports = IngredientsCreateService;


