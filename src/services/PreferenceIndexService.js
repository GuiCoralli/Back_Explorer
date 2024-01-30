const AppError = require("../utils/AppError");

class PreferenceIndexService {
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }

    async execute(user_id) {
        try {
            const userPreferences = this.preferenceRepository.filterPreferencesByUserId(user_id)

            return userPreferences;
        } catch {
            throw new AppError("Não foi possível mostrar seu pratos preferidos.", 500);
        };
    };
}

module.exports = PreferenceIndexService;