const AppError = require("../utils/AppError");

class RequestOrderIndexService {
    constructor(requestOrderRepository) {
        this.requestOrderRepository = requestOrderRepository;
    }

    async execute({ id }) {
        try {
            const requestOrders = await this.requestOrderRepository.filterRequestOrdersByUserId(id);

            if (!requestOrders || requestOrders.length === 0) {
                const requestOrderWithPlates = [];
                return requestOrderWithPlates;
            };

            const requestOrdersWithPlates = [];

            for (const requestOrder of requestOrders) {
                const requestOrderItems = await this.requestOrderRepository.getRequestOrdersWithPlates(requestOrder.id);

                const plates = requestOrderItems.map(item => ({
                    plate_id: item.plate_id,
                    image: item.image,
                    name: item.name,
                    quantity: item.quantity,
                    total: item.total
                }));

                const totalQuantityResult = await this.requestOrderRepository.calculateTotalQuantity(requestOrder.id);

                const totalQuantity = totalQuantityResult.totalQuantity || 0;

                const requestOrderWithPlates = { ...requestOrder, plates, totalQuantity };

                ordersWithPlates.push(requestOrderWithPlates);
            };

            return requestOrdersWithPlates;
        } catch {
            throw new AppError("Erro ao buscar por seu pedido.", 500);
        };
    };
}

module.exports = RequestOrderIndexService;