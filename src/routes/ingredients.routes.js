const { Router } = require("express");
const IngredientsController = require("../controllers/IngredientsController");
const IngredientsImgController = require("../controllers/IngredientsImgController");
const {ensureAuthenticated, ensureIsAdmin } = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfigs = require("../configs/upload");

const ingredientsRoutes = Router();
const ingredientsController = new IngredientsController();
const ingredientsImgController = new IngredientsImgController();
const upload = multer(uploadConfigs.MULTER);




ingredientsRoutes.post("/", ensureAuthenticated, ensureIsAdmin, ingredientsController.create);
ingredientsRoutes.get("/", ingredientsController.index);
ingredientsRoutes.patch("/:ingredient_id", ensureAuthenticated, ensureIsAdmin, upload.single("image"), ingredientsImgController.update);


module.exports = ingredientsRoutes;







