const knex = require("../database/knex");

class RequestOrderRepository {
    async filterPlates(plateIds) {
        const requestOrderItems = await knex("plates").whereIn("id", plateIds);

        return requestOrderItems;
    };

    async createRequestOrder(newRequestOrder) {
        const requestOrder = await knex("requestorders").insert(newRequestOrder);

        return requestOrder;
    };

    async createRequestOrderItems(requestorderItem) {
        await knex("requestorder_items").insert(requestorderItem);
    };

    async update(id, status) {
        await knex("requestorders")
            .where("id", id)
            .update({ status });
    };

    async filterRequestOrdersByUserId(id) {
        const requestOrdersById = await knex
            .select("*")
            .from("requestorders")
            .where("user_id", id)
            .orderBy("requestorders_at", "desc");

        return requestOrdersById;
    };

    async getRequestOrdersWithPlates(id) {
        const requestOrderItems = await knex("requestorder_items")
            .join("plates", "requestorder_items.plate_id", "plates.id")
            .where("requestorder_items.order_id", id)
            .select("requestorder_items.plate_id", "plates.image", "plates.name", "requestorder_items.quantity", "requestorder_items.total");

        return requestOrderItems;
    };

    async calculateTotalQuantity(id) {
        const totalQuantityResult = await knex("requestorder_items")
            .where("requestorder_id", id)
            .sum("quantity as totalQuantity")
            .first();

        return totalQuantityResult;
    };

    async showAllRequestOrders() {
        const allRequestOrders = await knex
            .select("*")
            .from("requestorders")
            .orderBy("requestorders_at", "desc");

        return allRequestOrders;
    };
}

module.exports = RequestOrderRepository;