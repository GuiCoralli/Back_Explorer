const AppError = require("../utils/AppError");

class PlateDeleteService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(id) {
        try {
            await this.plateRepository.deletePlate(id);

            return { message: "Prato excluído com sucesso!" };
        } catch {
            throw new AppError("Não foi possível excluir o prato!", 500);
        };
    };
}

module.exports = PlateDeleteService;