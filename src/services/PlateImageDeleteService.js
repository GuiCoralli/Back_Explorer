const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");

class PlateCreateService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(filename) {
        const diskStorage = new DiskStorage();
        try {
            await diskStorage.deleteFile(filename);

            return { Mensagem: "Imagem removida." };
        } catch {
            throw new AppError("Não foi possível remover a imagem!", 500);
        };
    };
}

module.exports = PlateCreateService;