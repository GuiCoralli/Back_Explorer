const AppError = require("../utils/AppError");

class RequestOrderCreateService {
    constructor(requestOrderRepository) {
        this.requestOrderRepository = requestOrderRepository;
    }

    async execute({ requestOrder }) {
        try {
            let total = 0;
            const platePrices = {};

            const plateIds = requestOrder.plates.map((plate) => plate.plate_id);

            const requestOrderItems = await this.requestOrderRepository.filterPlates(plateIds);

            requestOrderItems.forEach((requestOrderItem) => {
                platePrices[requestOrderItem.id] = requestOrderItem.price;
            });

            for (const plate of requestOrder.plates) {
                const platePrice = platePrices[plate.plate_id];
                const totalPlate = platePrice * plate.quantity;
                total += totalPlate;
            };

            const newRequestOrder = {
                user_id: requestOrder.user_id,
                total,
                requestorders_at: requestOrder.requestorders_at,
                status: requestOrder.status
            };

            const [requestOrder_id] = await this.requestOrderRepository.createRequestOrder(newRequestOrder);

            for (const plate of requestOrder.plates) {
                const platePrice = platePrices[plate.plate_id];
                const totalItem = platePrice * plate.quantity;

                const requestOrderItem = {
                    requestOrder_id,
                    plate_id: plate.plate_id,
                    quantity: plate.quantity,
                    total: totalItem,
                };

                await this.requestOrderRepository.createRequestOrderItems(requestOrderItem);
            };

            return { Mensagem: "Pedido criado com sucesso!" };
        } catch {
            throw new AppError("Ocorreu um erro ao criar o pedido.", 500);
        };
    };
}

module.exports = RequestOrderCreateService;