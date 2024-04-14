const ImgUpdateService = require("../services/img/ImgUpdateService");
const FoodsRepository = require("../repositories/FoodsRepository");
const uploadConfigs = require("../configs/upload");

class FoodsImgController {
  async update(request, response) {
    const { food_id } = request.params;
    const imageFilename = request.file.filename;

    const foodsRepository = new FoodsRepository();
    const imgUpdateService = new ImgUpdateService(foodsRepository);

    await imgUpdateService.execute({
      id: food_id,
      imageFilename,
      folder: uploadConfigs.FOODS_FOLDER,
    });

    return response.json();
  }
}

module.exports = FoodsImgController;


