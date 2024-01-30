const AppError = require("../utils/AppError");

class RequestPaymentIndexService {
    constructor(requestPaymentRepository) {
        this.requestPaymentRepository = requestPaymentRepository;
    }

    async execute({ plateIds }) {
        try {
            if (plateIds.length > 0) {
                const arrayPlateIds = plateIds.split(",");

                const filteredPlates = await this.requestPaymentRepository.filterPlates(arrayPlateIds);

                return filteredPlates;
            } else {
                return { Mensagem: "Não existe nenhum item adicionado ao pedido." };
            };
        } catch {
            throw new AppError("Não conseguimos carregar o pedido.", 500);
        };
    };
}

module.exports = RequestPaymentIndexService;