const RequestOrderRepository = require("../repositories/RequestOrderRepository");
const RequestOrderCreateService = require("../services/RequestOrderCreateService");
const RequestOrderUpdateService = require("../services/RequestOrderUpdateService");
const RequestOrderIndexService = require("../services/RequestOrderIndexService");
const RequestOrderShowService = require("../services/RequestOrderShowService");

const requestorderRepository = new RequestOrderRepository();

class RequestOrdersController {
    async create(req, res) {
        const { requestorder } = req.body;

        const requestorderCreateService = new RequestOrderCreateService(requestorderRepository);

        const response = await requestorderCreateService.execute({ requestorder });

        return res.status(201).json(response);
    };

    async update(req, res) {
        const { id } = req.params;
        const { status } = req.body;

        const requestorderUpdateService = new RequestOrderUpdateService(requestorderRepository);

        const response = await requestorderUpdateService.execute({ id, status });

        return res.status(200).json(response);
    };

    async index(req, res) {
        const { user_id } = req.params;

        const requestorderIndexService = new RequestOrderIndexService(requestorderRepository);

        const requestordersWithPlates = await requestorderIndexService.execute({ id: user_id });

        return res.status(200).json(requestordersWithPlates);
    };

    async show(req, res) {
        const requestorderShowService = new RequestOrderShowService(requestorderRepository);

        const requestordersWithPlates = await requestorderShowService.execute();

        return res.status(200).json(requestordersWithPlates);
    };
}

module.exports = RequestOrdersController;