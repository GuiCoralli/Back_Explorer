const PlateImageDeleteService = require("../services/PlateImageDeleteService");

class PlateImageController {
    async delete(req, res) {
        const { filename } = req.params;

        const plateImageDeleteService = new PlateImageDeleteService();

        const response = await plateImageDeleteService.execute(filename);

        return res.status(200).json(response);
    };
}

module.exports = PlateImageController;