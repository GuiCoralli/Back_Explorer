const RequestPaymentRepository = require("../repositories/RequestPaymentRepository");
const RequestPaymentIndexService = require("../services/RequestPaymentIndexService");

class RequestPaymentController {
    async index(req, res) {
        const { plateIds } = req.query;

        const requestpaymentRepository = new RequestPaymentRepository();

        const requestpaymentIndexService = new RequestPaymentIndexService(requestpaymentRepository);

        const response = await requestpaymentIndexService.execute({ plateIds });

        return res.status(200).json(response);
    };
}

module.exports = RequestPaymentController;