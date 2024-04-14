
class RequestShowService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async execute(request_id) {
    const request = await this.requestRepository.findById(request_id);

    const foodsOfThisRequest = await this.requestRepository.findFoodsOfAnRequest(
      request_id
    );

    const requestWithFoods = {
      ...request,
      foods: [...foodsOfThisRequest],
    };

    return requestWithFoods;
  }
}

module.exports = RequestShowService;

