const ImgUpdateService = require("../services/img/ImgUpdateService");

const IngredientsRepository = require("../repositories/IngredientsRepository");
const uploadConfigs = require("../configs/upload");

class IngredientsImgController {
  async update(request, response) {
    const { ingredient_id } = request.params;
    const imageFilename = request.file.filename;

    const ingredientsRepository = new IngredientsRepository();
    const imgUpdateService = new ImgUpdateService(ingredientsRepository);

    const infosUpdated = await imgUpdateService.execute({
      id: ingredient_id,
      imageFilename,
      folder: uploadConfigs.INGREDIENTS_FOLDER,
    });

    return response.json(infosUpdated);
  }
}

module.exports = IngredientsImgController;