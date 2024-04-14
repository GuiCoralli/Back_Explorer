
class RequestIndexService {
  constructor(requestRepository) {
    this.requestRepository = requestRepository;
  }

  async execute({ user_id, accessadmin }) {
    let requests;

    if (accessadmin) {
      requests = await this.requestRepository.findAllRequests();
    } else {
      requests = await this.requestRepository.findAllRequestsFromASingleUser(user_id);
    }

    function formatRequests() {
      let singleRequests = [];

      requests.forEach(request => {
        const requestAlreadyRegistered = singleRequests.find(
          singleRequest => singleRequest.id === request.id
        );

        if (requestAlreadyRegistered) {
          return;
        }

        let foodsOfThisRequest = [];

        requests.forEach(item => {
          if (item.id === request.id) {
            foodsOfThisRequest = [
              {
                request_food_id: item.request_food_id,
                title: item.title,
                food_amount: item.food_amount,
              },
              ...foodsOfThisRequest,
            ];
          }
        });

        singleRequests = [{
            id: request.id,
            status: request.status,
            created_at: request.created_at,
            foods: foodsOfThisRequest,
          },
          ...singleOrders,
        ];
      });

      return singleRequests;
    }

    const requestsFormatted = formatRequests();

    return requestsFormatted;
  }
}

module.exports = RequestIndexService;