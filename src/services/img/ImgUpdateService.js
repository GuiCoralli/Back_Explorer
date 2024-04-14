const DiskStorage = require("../../providers/DiskStorage");
const AppError = require("../../utils/AppError");

class ImgUpdateService {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({ id, imageFilename, folder }) {
    const infos = await this.repository.findById(id);

    if (!infos) {
      throw new AppError("Refeição e ou Ingrediente não cadastrados e assim não foi possível atualizar.");
    }

    const diskStorage = new DiskStorage();

    if (infos.image) {
      await diskStorage.deleteFile(infos.image, folder);
    }

    const filename = await diskStorage.saveFile(imageFilename, folder);

    const infosUpdated = { id, image: filename };

    await this.repository.updateImage(infosUpdated);

    return infosUpdated;
  }
}

module.exports = ImgUpdateService;