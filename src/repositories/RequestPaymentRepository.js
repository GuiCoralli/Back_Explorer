const knex = require("../database/knex");

class RequestPaymentRepository {
    async filterPlates(arrayPlateIds) {
        const filteredPlates = await knex("plates")
            .select("id", "image", "name", "price")
            .whereIn("id", arrayPlateIds);

        return filteredPlates;
    };
}

module.exports = RequestPaymentRepository;