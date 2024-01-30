const AppError = require("../utils/AppError");

class PreferenceShowService {
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }

    async execute() {
        try {
            const allPreferences = await this.preferenceRepository.showAllPreferences();

            return allPreferences;
        } catch {
            throw new AppError("Não foi possível encontrar pelos seu pratos preferidos.", 500);
        };
    };
}

module.exports = PreferenceShowService;