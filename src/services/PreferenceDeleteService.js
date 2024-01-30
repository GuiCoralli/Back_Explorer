const AppError = require("../utils/AppError");

class PreferenceDeleteService {
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }

    async execute(id) {
        try {
            await this.preferenceRepository.delete(id);

            return { Mensagem: "Removido dos preferidos." };
        } catch {
            throw new AppError("Não foi possível remover seu pratos dos preferidos.", 500);
        };
    };
}

module.exports = PreferenceDeleteService;