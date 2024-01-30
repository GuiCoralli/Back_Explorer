const AppError = require("../utils/AppError");

class PlateShowService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(id) {
        try {
            const plate = await this.plateRepository.filterPlateById(id);
            const ingredients = await this.plateRepository.filterIngredientsByPlateId(id);

            const plateWithIngredients = {
                ...plate,
                ingredients
            };

            return plateWithIngredients;
        } catch {
            throw new AppError("Não foi possível visualizar o prato!", 500);
        };
    };
}

module.exports = PlateShowService;