const { Router } = require("express");

const PreferencesController = require("../controllers/PreferencesController");

const preferencesRoutes = Router();

const preferencesController = new PreferencesController();

preferencesRoutes.post("/", preferencesController.create);
preferencesRoutes.get("/:user_id", preferencesController.index);
preferencesRoutes.delete("/:id", preferencesController.delete);
preferencesRoutes.get("/", preferencesController.show);

module.exports = preferencesRoutes; 