const { Router } = require("express");

const RequestPaymentController = require("../controllers/RequestPaymentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const requestpaymentRoutes = Router();

const requestpaymentController = new RequestPaymentController();

requestpaymentRoutes.get("/", ensureAuthenticated, requestpaymentController.index);

module.exports = requestpaymentRoutes;