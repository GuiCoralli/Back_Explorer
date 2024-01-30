const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");

class PlateCreateService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(name, category, price, description, ingredients, req) {
        try {
            let imageFilename = null;

            if (req.file) {
                const diskStorage = new DiskStorage();

                try {
                    imageFilename = await diskStorage.saveFile(req.file.filename);
                } catch {
                    throw new AppError("Erro no carregamento da imagem.", 500);
                };
            };

            const [plate] = await this.plateRepository.createPlate(imageFilename, name, category, price, description);

            const ingredientsInsert = JSON.parse(ingredients).map(name => ({
                plate_id: plate.id,
                name
            }));

            await this.plateRepository.createIngredients(ingredientsInsert);

            return { Mensagem: "O prato foi adicionado com sucesso!" };
        } catch {
            throw new AppError("Não foi possível adicionar o prato.", 500);
        };
    };
}

module.exports = PlateCreateService;