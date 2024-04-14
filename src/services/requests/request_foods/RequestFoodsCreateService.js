class RequestFoodsCreateService {
  constructor(requestFoodsRepository) {
    this.requestFoodsRepository = requestFoodsRepository;
  }

  async execute({ requestId, foods_sent }) {
    const requestWithFoods = foods_sent.map( food => {
      return {
        request_id: requestId,
        food_id: food.food_id,
        food_amount: food.amount,
      };
    });

    await this.requestFoodsRepository.create(requestWithFoods);
  }
};

module.exports = RequestFoodsCreateService;