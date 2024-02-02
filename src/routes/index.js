const { Router } = require("express");

const usersRouter = require("./users.routes");
const adminaccessRouter = require("./admin.access.routes");
const platesRouter = require("./plates.routes");
const requestordersRouter = require("./requestorders.routes");
const preferencesRouter = require("./preferences.routes");
const sessionsRouter = require("./sessions.routes");
const requestpaymentRouter = require("./requestpayment.routes");


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/adminaccess", adminaccessRouter);
routes.use("/plates", platesRouter);
routes.use("/requestorders", requestordersRouter);
routes.use("/preferences", preferencesRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/requestpayment", requestpaymentRouter);


module.exports = routes;
