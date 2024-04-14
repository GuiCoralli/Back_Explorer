
class PreferencesIndexService {
  constructor(preferencesRepository) {
    this.preferencesRepository = preferencesRepository;
  }

  async execute(user_id) {
    const thisUsersPreferences = await this.preferencesRepository.index(user_id);

    return thisUsersPreferences;
  }
}

module.exports = PreferencesIndexService;