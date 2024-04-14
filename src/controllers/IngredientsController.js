const IngredientsRepository = require("../repositories/IngredientsRepository");

const IngredientsCreateService = require("../services/ingredients/IngredientsCreateService");

class IngredientsController {
  async create(request, response) {
    const { name } = request.body;

    const ingredientsRepository = new IngredientsRepository();
    const ingredientsCreateService = new IngredientsCreateService(ingredientsRepository);

    const ingredientInfos = await ingredientsCreateService.execute({ name });

    return response.status(201).json(ingredientInfos);
  }

  async index(request, response) {
    const ingredientsRepository = new IngredientsRepository();

    const result = await ingredientsRepository.index();

    return response.json(result);
  }
}

module.exports = IngredientsController;