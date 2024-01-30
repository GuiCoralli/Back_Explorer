const PreferenceRepository = require("../repositories/PreferenceRepository");
const PreferenceCreateService = require("../services/PreferenceCreateService");
const PreferenceShowService = require("../services/PreferenceShowService");
const PreferenceIndexService = require("../services/PreferenceIndexService");
const PreferenceDeleteService = require("../services/PreferenceDeleteService");

const preferenceRepository = new PreferenceRepository();

class PreferencesController {
    async create(req, res) {
        const { userId, dishId } = req.body;

        const preferenceCreateService = new PreferenceCreateService(preferenceRepository);

        const response = await preferenceCreateService.execute(userId, plateId);

        return res.status(201).json(response);
    };

    async show(req, res) {
        const preferenceShowService = new PreferenceShowService(preferenceRepository);

        const allPreferences = await preferenceShowService.execute();

        return res.status(200).json(allPreferences);
    };

    async index(req, res) {
        const { user_id } = req.params;

        const preferenceIndexService = new PreferenceIndexService(preferenceRepository);

        const userPreferences = await preferenceIndexService.execute(user_id);

        return res.status(200).json(userPreferences);
    };

    async delete(req, res) {
        const { id } = req.params;

        const preferenceDeleteService = new PreferenceDeleteService(preferenceRepository);

        const response = await preferenceDeleteService.execute(id);

        return res.status(200).json(response);
    };
}

module.exports = PreferencesController;