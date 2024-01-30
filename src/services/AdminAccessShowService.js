const AppError = require("../utils/AppError");

class AdminAccessShowService {
    constructor(adminAccessRepository) {
        this.adminAccessRepository = adminAccessRepository;
    }

    async execute() {
        try {
            const isAdminAccess = this.adminAccessRepository.findByAdminAccess();

            return isAdminAccess;
        } catch {
            throw new AppError("Administrador não encontrado.", 500);
        };
    };
}

module.exports = AdminAccessShowService;