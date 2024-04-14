const  { Router } = require("express");

const usersRoutes = require("./users.routes");
const foodsRoutes = require("./foods.routes");
const sessionsRoutes = require("./sessions.routes");
const requestsRoutes = require("./requests.routes");
const preferencesRoutes = require("./preferences.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/foods", foodsRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/requests", requestsRoutes);
routes.use("/preferences", preferencesRoutes);
routes.use("/ingredients", ingredientsRoutes);

module.exports = routes;