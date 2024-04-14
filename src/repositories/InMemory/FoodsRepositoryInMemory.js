class FoodsRepositoryInMemory { 
  constructor() {
    this.foods = [];
  }
  
  generateId() {
    return Math.floor(Math.random() * 1000);
  }
    async create({ user_id, title, description, price }) {
      const food = {
        id: this.generateId(),
        user_id,
        title,
        description,
        price,
      };
  
      this.foods.push(food);
  
      return food;
    }
  
    async findById(id) {
      const foodInfos = this.foods.find((food) => food.id === id);
  
      return foodInfos;
    }
  
    async findByTitle(title) {
      const foodInfos = this.foods.find((food) => food.title === title);
  
      return foodInfos;
    }
}
  
module.exports = FoodsRepositoryInMemory;