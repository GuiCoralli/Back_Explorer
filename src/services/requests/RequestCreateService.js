class RequestCreateService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async execute({ user_id, foods_sent, foundFoods }) {
    if (foundFoods.length !== foods_sent.length) {
      throw new AppError("As comidas não foram encontradas.");
    }

    const prices = foods_sent.map(foodSend => {
      const foodPrice = foundFoods.find(
        foodFounded => foodFounded.id == foodSend.food_id
      );

      return parseFloat(foodPrice.price * foodSend.amount);
    });

    const requestPrice = prices
      .reduce((prevValue, element) => prevValue + element).toFixed(2);

    const request = { status: "pending", price: requestPrice, user_id };

    const requestId = await this.requestRepository.create(request);

    return requestId;
  }
};

module.exports = RequestCreateService;