const AdminAccessRepository = require("../repositories/AdminAccessRepository");
const AdminAccessCreateService = require("../services/AdminAccessCreateService");
const AdminAccessShowService = require("../services/AdminAccessShowService");

const adminAccessRepository = new AdminAccessRepository();

class AdminAccessController {
    async create(_req, res) {
        const { name, email, password, } = _req.body;

        const adminAccessCreateService = new AdminAccessCreateService(adminAccessRepository);

        const response = await adminAccessCreateService.execute({ name, email, password });

        return res.status(201).json(response);
    };

    async show(_req, res) {
        const adminAccessShowService = new AdminAccessShowService(adminAccessRepository);

        const isAdminAccess = await adminAccessShowService.execute(isAdminAccess);

        return res.status(201).json(isAdminAccess);
    };
};

module.exports = AdminAccessController;