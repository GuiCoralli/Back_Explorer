const { Router } = require("express");
const PreferencesController = require("../controllers/PreferencesControllers");

const {ensureAuthenticated, ensureIsNotAdmin, ensuresFoodsAreRegistered } = require("../middlewares/ensureAuthenticated");

const preferencesRoutes = Router();

const preferencesController = new PreferencesController();

preferencesRoutes.use(ensureAuthenticated);

preferencesRoutes.post("/:food_id", ensureIsNotAdmin, ensuresFoodsAreRegistered, preferencesController.create);
preferencesRoutes.get("/", preferencesController.index);
preferencesRoutes.delete("/:food_id", ensureIsNotAdmin, preferencesController.delete);


module.exports = preferencesRoutes;