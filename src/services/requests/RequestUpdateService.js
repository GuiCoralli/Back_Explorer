const AppError = require("../../utils/AppError");

class RequestUpdateService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async execute({ request_id, status }) {
    const StatusSelection = ["pending", "preparing", "delivered"];

    const selectedStatusIsValid = StatusSelection.find(
      selection => selection === status
    );

    if (!selectedStatusIsValid) {
      throw new AppError("Este status não é válido.");
    }

    await this.requestRepository.update({ request_id, status });
  }
}

module.exports = RequestUpdateService;


