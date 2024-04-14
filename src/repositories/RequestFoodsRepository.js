const knex = require("../database/knex");

class RequestFoodsRepository {
    async create(request_foods) {
        await knex("request_foods").insert(request_foods)
    }
}
module.exports = RequestFoodsRepository