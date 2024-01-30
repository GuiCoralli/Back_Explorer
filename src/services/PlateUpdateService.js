const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");

class PlateUpdateService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(id, name, category, price, description, ingredients, removePlateImage, req) {
        try {
            const plateUpdates = {};

            if (name) {
                plateUpdates.name = name;
            };

            if (category) {
                plateUpdates.category = category;
            };

            if (price) {
                plateUpdates.price = price;
            };

            if (description) {
                plateUpdates.description = description;
            };

            let imageFilename = null;

            const plate = await this.plateRepository.filterPlateById(id);

            const diskStorage = new DiskStorage();

            if (req.file) {
                if (plate.image) {
                    try {
                        await diskStorage.deleteFile(plate.image);
                    } catch {
                        throw new AppError("Erro ao remover a imagem antiga.", 500);
                    };
                };

                try {
                    imageFilename = await diskStorage.saveFile(req.file.filename);
                    plateUpdates.image = imageFilename;
                } catch {
                    throw new AppError("Erro ao carregar a imagem.", 500);
                };
            };

            if (!removePlateImage) {
                await diskStorage.deleteFile(plate.image);
                plateUpdates.image = null;
            };

            await this.plateRepository.update(plateUpdates, id);

            if (ingredients) {
                const ingredientsArray = JSON.parse(ingredients);

                await this.plateRepository.deleteIngredients(id);

                if (ingredientsArray.length > 0) {
                    const ingredientsInsert = ingredientsArray.map(ingredient => ({
                        plate_id: id,
                        name: ingredient
                    }));

                    await this.plateRepository.createIngredients(ingredientsInsert);
                };
            };

            return { Mensagem: "Prato atualizado com sucesso!" };
        } catch {
            throw new AppError("Prato não atualizado!", 500);
        };
    };
}

module.exports = PlateUpdateService;
