const AppError = require("../utils/AppError");

class PlateIndexService {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }

    async execute(itemSearch) {
        try {
            let plates;

            if (itemSearch) {
                plates = await this.plateRepository.filterPlateByNameOrIngredient(itemSearch);

            } else {
                plates = await this.plateRepository.getAllPlates();
            };

            const platesIngredients = await this.plateRepository.getAllIngredients();

            const platesWithIngredients = plates.map(plate => {
                const plateIngredients = platesIngredients.filter(ingredient => ingredient.plate_id === plate.id);

                return {
                    ...plate,
                    ingredients: plateIngredients
                };
            });

            return platesWithIngredients;
        } catch {
            throw new AppError("Não foi possível buscar o que deseja.", 500);
        };
    };
}

module.exports = PlateIndexService;