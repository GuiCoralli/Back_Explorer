const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const PlatesController = require("../controllers/PlatesController");
const PlateImageController = require("../controllers/PlateImageController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();
const plateImageController = new PlateImageController();

platesRoutes.use(ensureAuthenticated);

platesRoutes.post("/", upload.single("image"), platesController.create);
platesRoutes.put("/:id", upload.single("image"), platesController.update);
platesRoutes.get("/:id", platesController.show);
platesRoutes.delete("/:id", platesController.delete);
platesRoutes.get("/", platesController.index);
platesRoutes.delete("/files/:filename", plateImageController.delete);

module.exports = platesRoutes;