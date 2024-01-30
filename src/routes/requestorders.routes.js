const { Router } = require("express");

const RequestOrdersController = require("../controllers/RequestOrdersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const requestordersRoutes = Router();

const requestordersController = new RequestOrdersController();

requestordersRoutes.use(ensureAuthenticated);

requestordersRoutes.post("/", requestordersController.create);
requestordersRoutes.put("/:id", requestordersController.update);
requestordersRoutes.get("/:user_id", requestordersController.index);
requestordersRoutes.get("/", requestordersController.show);

module.exports = requestordersRoutes;