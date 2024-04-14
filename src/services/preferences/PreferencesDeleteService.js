const AppError = require("../../utils/AppError");

class PreferencesDeleteService {
  constructor(preferencesRepository) {
    this.preferencesRepository = preferencesRepository;
  }

  async execute({ user_id, food_id }) {
    const preferencesInfos = await this.favoriteRepository.findByUserAndFood({
      user_id,
      food_id,
    });

    if (!preferencesInfos) {
      throw new AppError("Preferido não encontrado.");
    }

    await this.favoriteRepository.delete(preferencesInfos.id);
  }
}

module.exports = PreferencesDeleteService;