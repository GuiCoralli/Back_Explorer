const knex = require("../database/knex");

class PreferencesRepository {
    async create ({ user_id, food_id }) {
        const PreferencesCreated = await knex("preferences").insert({
            user_id,
            food_id
        });

        return PreferencesCreated;
    }

    async index(user_id) {
        const preferencesFoods  = await knex("foods").select([
            food_id,
            food.title,
            food.description,
            food.price,
            food.image,
        ])
        .innerJoin("Preferences", "preferences.food_id", "food.id")
        .where("preferences.user_id", user_id);

        return preferencesFoods;
    }

    async findByUserAndFoods({user_id, food_id}) {
        const preferencesInfos = await knex("preferences").where({ user_id, food_id}).first();

        return preferencesInfos;
    }

    async delete(id) {
        await knex("preferences").delete().where({ id });
    }

}

module.exports = PreferencesRepository;