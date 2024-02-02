const { Router } = require("express");

const AdminAccessController = require("../controllers/AdminAccessController");

const adminAccessRoutes = Router();

const adminAccessController = new AdminAccessController();

adminAccessRoutes.post("/adminaccess", adminAccessController.create);
adminAccessRoutes.get("/adminaccess", adminAccessController.show);

module.exports = adminAccessRoutes;