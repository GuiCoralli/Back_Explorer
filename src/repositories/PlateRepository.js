const knex = require("../database/knex");

class PlateRepository {
    async createPlate(imageFilename, name, category, price, description) {
        const plate = await knex("plates").insert({
            image: imageFilename,
            name,
            category,
            price,
            description
        }).returning("*");

        return plate;
    };

    async createIngredients(ingredientsInsert) {
        await knex("ingredients").insert(ingredientsInsert);
    };

    async filterPlateById(id) {
        const plate = await knex("plates").where({ id }).first();

        return plate;
    };

    async update(plateUpdates, id) {
        await knex("plates").update(plateUpdates).where("id", id);
    };

    async deleteIngredients(id) {
        await knex("ingredients").where("plate_id", id).del();
    };

    async filterIngredientsByPlateId(id) {
        const ingredients = await knex("ingredients").where({ plate_id: id }).orderBy("name");

        return ingredients;
    };

    async deletePlate(id) {
        await knex("plates").where({ id }).delete();
    };

    async filterPlateByNameOrIngredient(itemSearch) {
        const plates = await knex("ingredients")
            .distinct("plates.id")
            .select([
                "plates.id",
                "plates.image",
                "plates.name",
                "plates.category",
                "plates.price",
                "plates.description",
            ])
            .where(function () {
                this.whereLike("plates.name", `%${itemSearch}%`)
                    .orWhereLike("ingredients.name", `%${itemSearch}%`);
            })
            .innerJoin("plates", "plates.id", "ingredients.plate_id");

        return plates;
    };

    async getAllPlates() {
        const allPlates = await knex("plates")
            .orderBy("name");
        return allPlates;
    };

    async getAllIngredients() {
        const platesIngredients = await knex("ingredients");

        return platesIngredients;
    };
}

module.exports = PlateRepository;