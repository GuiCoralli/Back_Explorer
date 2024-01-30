const AppError = require("../utils/AppError");

class RequestOrderShowService {
    constructor(requestOrderRepository) {
        this.requestOrderRepository = requestOrderRepository;
    }

    async execute() {
        try {
            const requestOrders = await this.requestOrderRepository.showAllRequestOrders();

            if (!requestOrders || requestOrders.length === 0) {
                const requestOrderWithPlates = [];
                return requestOrderWithPlates;
            };

            const requestOrdersWithPlates = [];

            for (const requestOrder of requestOrders) {
                const requestOrderItems = await this.requestOrderRepository.getOrdersWithPlates(requestOrder.id);

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

                requestOrdersWithPlates.push(requestOrderWithPlates);
            };

            return requestOrdersWithPlates;
        } catch {
            throw new AppError("Ocorreu um erro ao buscar pelos pedidos.", 500);
        };
    };
}

module.exports = RequestOrderShowService;