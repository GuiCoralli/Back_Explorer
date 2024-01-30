const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class AdminAccessCreateService {
    constructor(adminAccessRepository) {
        this.adminAccessRepository = adminAccessRepository;
    }

    async execute({ name, email, password }) {
        try {
            const hashedPassword = await hash(password, 8);

            await this.adminAccessRepository.create(name, email, hashedPassword);

            return { Mensagem: "Administrador cadastrado com sucesso!" };
        } catch {
            throw new AppError("Administrador não cadastrado.", 500);
        };
    };
}

module.exports = AdminAccessCreateService;