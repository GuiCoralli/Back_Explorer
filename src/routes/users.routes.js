const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const UsersAvatarController = require("../controllers/UsersAvatarController");
const UsersController = require("../controllers/UsersController");

const multer = require("multer");
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);

const usersRoutes = Router();

const usersAvatarController = new UsersAvatarController();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated.ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated.ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);


module.exports = usersRoutes;
