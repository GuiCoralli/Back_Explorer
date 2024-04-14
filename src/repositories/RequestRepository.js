const { request } = require("express");
const knex = require("../database/knex");

class RequestRepository {
    async create(request) {
        const requestId = await knex("requests").insert(request);
        return requestId[0];
    }

    async findById(id) {
        const request = await knex("requests").where({id}).first();
        return request;
    }

    async findFoodsOfARequest(request_id) {
        const foods = await knex("foods")
          .select([
            "foods.id",
            "foods.title",
            "foods.price",
            "foods.image",
            "requests_foods.food_amount",
          ])
          .innerJoin("requests_foods", "requests_foods.food_id", "foods.id")
          .where("requests_foods.food_id", request_id);
    
        return foods;
    }

    async findAllRequests() {
        const request = await knex("requests")
          .select([
            "requests.id",
            "requests.status",
            "requests.created_at",
            "requests_foods.id as requests_food_id",
            "foods.title",
            "requests_foods.food_amount",
          ])
          .innerJoin("requests_foods", "requests_foods.request_id", "requests.id")
          .innerJoin("foods", "foods.id", "requests_foods.food_id");
    
        return request;
    }
    
    async findAllRequestsFromOnlyOneUser(user_id) {
        const orders = await knex("requests")
          .select([
            "requests.id",
            "requests.status",
            "requests.created_at",
            "requests_foods.id as requests_food_id",
            "foods.title",
            "requests_foods.food_amount",
          ])
          .innerJoin("requests_foods", "requests_foods.request_id", "requests.id")
          .innerJoin("foods", "foods.id", "requests_foods.food_id")
          .where("request.user_id", user_id);
          
          return orders;
        }
        
    async update({ request_id, status }) {
      await knex("requests").update({ status }).where({ id: request_id });
    }
}

module.exports = RequestRepository;