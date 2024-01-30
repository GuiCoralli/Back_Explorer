const knex = require("../database/knex");

class PreferenceRepository {
    async create(userId, plateId) {
        await knex("preferences").insert({ user_id: userId, plate_id: plateId });
    };

    async showAllPreferences() {
        const allPreferences = await knex.select("*").from("preferences");

        return allPreferences;
    };

    async filterPreferencesByUserId(id) {
        const userPreferences = await knex("preferences")
            .select("preferences.id", "preferences.plate_id", "plates.image", "plates.name")
            .join("plates", "preferences.plate_id", "plates.id")
            .where("preferences.user_id", id);

        return userPreferences;
    };

    async delete(id) {
        await knex("preferences").where({ id }).delete();
    };
}

module.exports = PreferenceRepository;