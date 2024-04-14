const RequestFoodsCreateService = require("../services/requests/request_foods/RequestFoodsCreateService");

const RequestCreateService = require("../services/requests/RequestCreateService");
const RequestShowService = require("../services/requests/RequestShowService");
const RequestUpdateService = require("../services/requests/RequestUpdateService");
const RequestSearchService = require("../services/requests/RequestSearchService");
const RequestIndexService = require("../services/requests/RequestIndexService");


const RequestFoodsRepository = require("../repositories/RequestFoodsRepository");
const RequestRepository = require("../repositories/RequestFoodsRepository");
const FoodsRepository = require("../repositories/FoodsRepository");
const UserRepository = require("../repositories/UserRepository");
const UserVerifyIfIsAdmin = require("../services/users/UserVerifyIfIsAdmin");

class RequestsControllers {
  async create(request, response) {
    const user_id = request.user.id;

    const { body: foods_sent } = request;

    const foodsRepository = new FoodsRepository();
    const requestRepository = new RequestRepository();
    const requestFoodsRepository = new RequestFoodsRepository();

    const requestCreateService = new RequestCreateService(
      requestRepository,
      foodsRepository
    );

    const requestFoodsCreateService = new RequestFoodsCreateService(requestFoodsRepository);

    const foodsIndexByIdService = new FoodsIndexByIdService(foodsRepository);

    const foundFoods = await foodsIndexByIdService.execute(foods_sent);

    const requestId = await requestCreateService.execute({
      user_id,
      foods_sent,
      foundFoods,
    });

    await requestFoodsCreateService.execute({
      requestId,
      foods_sent,
    });

    return response.status(201).json();
  }

  async show(request, response) {
    const { request_id } = request.params;

    const requestRepository = new RequestRepository();
    const requestShowService = new RequestShowService(requestRepository);

    const requestWithFoods = await requestShowService.execute(request_id);

    return response.json(requestWithFoods);
  }

  async index(request, response) {
    const user_id = request.user.id;

    const userRepository = new UserRepository();
    const userVerifyIfIsAdmin = new UserVerifyIfIsAdmin(userRepository);

    const accessadmin = await userVerifyIfIsAdmin.execute(user_id);

    const requestRepository = new    RequestRepository();
    const requestIndexService = new  RequestIndexService(requestRepository);

    const result = await requestIndexService.execute({ user_id, accessadmin });

    return response.json(result);
  }

  async update(request, response) {
    const { request_id, status } = request.body;

    const requestRepository = new RequestRepository();
    const requestUpdateService = new RequestUpdateService(requestRepository);
    const requestSearchService = new RequestSearchService(requestRepository);

    await requestSearchService.execute(request_id);

    await requestUpdateService.execute({ request_id, status });

    return response.status(201).json();
  }
}

module.exports = RequestsControllers;