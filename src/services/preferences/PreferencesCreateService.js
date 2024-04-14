const AppError = require("../../utils/AppError");


class PreferencesCreateService {
  constructor(preferencesRepository) {
    this.preferencesRepository = preferencesRepository;
  }

  async execute({ user_id, food_id }) {
    const foodPreferencesHaveAlreadyBeenRegistered =
      await this.preferencesRepository.findByUserAndFood({ user_id, food_id });

    if (foodPreferencesHaveAlreadyBeenRegistered) {
      throw new AppError("Preferências alimentares já foram registradas.");
    }

    await this.preferencesRepository.create({ user_id, food_id });
  }
}

module.exports = PreferencesCreateService;

