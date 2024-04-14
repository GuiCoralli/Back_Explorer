const { Router } = require("express");
const multer = require("multer");
const uploadConfigs = require("../configs/upload");
const upload = multer(uploadConfigs.MULTER);

const FoodsController = require("../controllers/FoodsController");
const FoodsImgController = require("../controllers/FoodsImgController");

const {ensureAuthenticated, ensureIsAdmin, ensuresFoodsAreRegistered } = require("../middlewares/ensureAuthenticated");

const foodsRoutes = Router();


const foodsController = new FoodsController();
const foodsImgController = new FoodsImgController();

foodsRoutes.use(ensureAuthenticated);

foodsRoutes.get("/", foodsController.index); 
foodsRoutes.post("/", ensureIsAdmin, foodsController.create);
foodsRoutes.get("/:food_id", ensuresFoodsAreRegistered, foodsController.show);
foodsRoutes.put("/food_id", ensureIsAdmin, ensuresFoodsAreRegistered, foodsController.update);
foodsRoutes.delete("/:food_id", ensureIsAdmin, ensuresFoodsAreRegistered, foodsController.delete);
foodsRoutes.patch("/:food_id", ensureIsAdmin, ensuresFoodsAreRegistered, upload.single("image"), foodsImgController.update);


module.exports = foodsRoutes;
