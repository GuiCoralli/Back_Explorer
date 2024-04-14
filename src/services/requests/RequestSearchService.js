const AppError = require("../../utils/AppError");


class RequestSearchService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async execute(request_id) {
    const requestInfos = await this.requestRepository.findById(request_id);

    if (!requestInfos) {
      throw new AppError("Pedido não foi encontrado.");
    }

    return requestInfos;
  }
}

module.exports = RequestSearchService;

