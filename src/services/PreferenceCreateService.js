const AppError = require("../utils/AppError");

class PreferenceCreateService {
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }

    async execute(userId, plateId) {
        try {
            await this.preferenceRepository.create(userId, plateId);

            return { Mensagem: "Adicionado aos preferidos." };
        } catch {
            throw new AppError("Não foi possível adicionar aos preferidos.", 500);
        };
    };
}

module.exports = PreferenceCreateService;