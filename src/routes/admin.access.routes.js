const { Router } = require("express");

const AdminAccessController = require("../controllers/AdminAccessController");

const adminAccessRoutes = Router();

const adminAccessController = new AdminAccessController();

adminAccessRoutes.post("/", adminAccessController.create);
adminAccessRoutes.get("/", adminAccessController.show);

module.exports = adminAccessRoutes;