const PlateRepository = require("../repositories/PlateRepository");
const PlateCreateService = require("../services/PlateCreateService");
const PlateUpdateService = require("../services/PlateUpdateService");
const PlateShowService = require("../services/PlateShowService");
const PlateDeleteService = require("../services/PlateDeleteService");
const PlateIndexService = require("../services/PlateIndexService");

const plateRepository = new PlateRepository();

class PlatesController {
    async create(req, res) {
        const { name, category, price, description, ingredients } = req.body;

        const plateCreateService = new PlateCreateService(plateRepository);

        const response = await plateCreateService.execute(name, category, price, description, ingredients, req);

        return res.status(201).json(response);
    };

    async update(req, res) {
        const { id } = req.params;
        const { name, category, price, description, ingredients, removePlateImage } = req.body;

        const plateUpdateService = new PlateUpdateService(plateRepository);

        const response = await plateUpdateService.execute(id, name, category, price, description, ingredients, removePlateImage, req);

        return res.status(200).json(response);
    };

    async show(req, res) {
        const { id } = req.params;

        const plateShowService = new PlateShowService(plateRepository);

        const plateWithIngredients = await plateShowService.execute(id);

        return res.status(200).json(plateWithIngredients);
    };

    async delete(req, res) {
        const { id } = req.params;

        const plateDeleteService = new PlateDeleteService(plateRepository);

        const response = await plateDeleteService.execute(id);

        return res.status(200).json(response);
    };

    async index(req, res) {
        const { itemSearch } = req.query;

        const plateIndexService = new PlateIndexService(plateRepository);

        const plateWithIngredients = await plateIndexService.execute(itemSearch);

        return res.status(200).json(plateWithIngredients);
    };
}

module.exports = PlatesController;