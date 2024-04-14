const { Router } = require("express");
const RequestsController = require("../controllers/RequestsController");
const {ensureAuthenticated, ensureIsAdmin, ensureIsNotAdmin, ensureIsAdminOrUserRequest } = require("../middlewares/ensureAuthenticated");

const requestsRoutes = Router();

const requestsController = new RequestsController();

requestsRoutes.use(ensureAuthenticated);

requestsRoutes.post("/", ensureIsNotAdmin, requestsController.create);
requestsRoutes.put("/", ensureIsAdmin, requestsController.update);
requestsRoutes.get("/", requestsController.index);
requestsRoutes.get("/:request_id", ensureIsAdminOrUserRequest, requestsController.show);


module.exports = requestsRoutes;