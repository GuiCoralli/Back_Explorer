const PreferencesRepository = require("../repositories/PreferencesRepository");

const PreferencesCreateService = require("../services/preferences/PreferencesCreateService");
const PreferencesIndexService = require("../services/preferences/PreferencesIndexService");
const PreferencesDeleteService = require("../services/preferences/PreferencesDeleteService");

class PreferencesControllers {
  async create(request, response) {
    const user_id = request.user.id;
    const { food_id } = request.params;

    const preferencesRepository = new PreferencesRepository();
    const preferencesCreateService = new PreferencesCreateService(preferencesRepository);

    await preferencesCreateService.execute({ user_id, food_id });

    return response.status(201).json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    const preferencesRepository = new PreferencesRepository();
    const preferencesIndexService = new PreferencesIndexService(preferencesRepository);

    const result = await preferencesIndexService.execute(user_id);

    return response.json(result);
  }

  async delete(request, response) {
    const user_id = request.user.id;
    const { food_id } = request.params;

    const preferencesRepository = new PreferencesRepository();
    const preferencesDeleteService = new PreferencesDeleteService(preferencesRepository);

    await preferencesDeleteService.execute({ user_id, food_id });

    return response.status(201).json();
  }
}

module.exports = PreferencesControllers;