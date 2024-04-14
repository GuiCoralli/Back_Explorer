class RequestRepositoryInMemory {
    constructor() {
      this.requests = [];
    }
  
    generateTimestamp() {
      const currentTime = new Date().toISOString().replace("Z", "").replace("T", " ");
      return currentTime.substring(0, currentTime.length - 4);
    }
  
    create({ status, price, user_id }) {
      const request = {
        id: Math.floor(Math.random() * 1000),
        status,
        price,
        user_id,
        created_at: this.generateTimestamp(),
      };
  
      this.requests.push(request);
      return request;
    }
  }
  
  module.exports = RequestRepositoryInMemory;
  