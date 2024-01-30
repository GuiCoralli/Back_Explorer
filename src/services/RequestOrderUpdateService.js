const AppError = require("../utils/AppError");

class RequestOrderUpdateService {
    constructor(requestOrderRepository) {
        this.requestOrderRepository = requestOrderRepository;
    }

    async execute({ id, status }) {
        try {
            this.requestOrderRepository.update(id, status);

            return { Mensagem: "O Status foi atualizado com sucesso!" };
        } catch {
            throw new AppError("Erro ao tentar atualizar o pedido.", 500);
        };
    };
}

module.exports = RequestOrderUpdateService;