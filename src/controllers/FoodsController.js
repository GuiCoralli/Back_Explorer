const FoodsRepository = require("../repositories/FoodsRepository");
const FoodsIngredientsRepository = require("../repositories/FoodsIngredientsRepository");

const IngredientsRepository = require("../repositories/IngredientsRepository");

const FoodsIngredientsCreateService = require("../services/foods/foods_ingredients/FoodsIngredientsCreateService");
const FoodsIngredientsUpdateService = require("../services/foods/foods_ingredients/FoodsIngredientsUpdateService.js");


const FoodCreateService = require("../services/foods/FoodCreateService"); //Requisição 
const FoodUpdateService = require("../services/foods/FoodUpdateService");//Requisição 
const FoodIndexBySearchService = require("../services/foods/FoodIndexBySearchService");//Requisição 
const FoodShowService = require("../services/foods/FoodShowService");//Requisição 
const FoodDeleteService = require("../services/foods/FoodDeleteService");//Requisição


class FoodsController {
  /*constructor (
    foodsRepository, //Repo
    foodCreateService, //Services
    foodIndexBySearchService, //Services
    foodShowService,//Services
    foodUpdateService,//Services
    foodDeleteService,//Services
    foodsIngredientsRepository,//Repo
    foodIngredientCreateService,//Services
    foodIngredientUpdateService//Services
  ) 
  {
    this.foodsRepository = foodsRepository;//Repo
    this.foodCreateService = foodCreateService;//Services
    this.foodIndexBySearchService = foodIndexBySearchService;//Services
    this.foodShowService = foodShowService;//Services
    this.foodUpdateService = foodUpdateService;//Services
    this.foodDeleteService = foodDeleteService;//Services
    this.foodsIngredientsRepository = foodsIngredientsRepository;//Repo
    this.foodIngredientCreateService = foodIngredientCreateService;//Services
    this.foodIngredientUpdateService = foodIngredientUpdateService;//Services
  }
*/
  async create(request, response) {
    const { title, category, description, price, ingredients } = request.body;

    /*if (this.foodCreateService && this.foodIngredientCreateService && this.foodCreateService.execute && this.foodIngredientCreateService.execute)*/ {
      
    const foodsRepository = new FoodsRepository();
    const foodCreateService = new FoodCreateService(foodsRepository);

    const foodsIngredientsRepository = new foodsIngredientsRepository();
    const foodsIngredientsCreateService = new FoodsIngredientsCreateService(FoodsIngredientsRepository);

    const foodId = await foodCreateService.execute({
      title,
      category,
      description,
      price,
   });

    await foodsIngredientsCreateService.execute({ ingredients, foodId });

    return response
      .status(201)
      .json({ id: foodId, title, category, description, price, ingredients });
    }
  }
  
  async index(request, response) {
    const { search } = request.query;

    const foodsRepository = new FoodsRepository();
    const foodIndexBySearchService = new FoodIndexBySearchService(foodsRepository);

    /*if (this.foodIndexBySearchService && this.foodIndexBySearchService.execute)*/  
    const result = await foodIndexBySearchService.execute(search);
    return response.status(201).json(result);
  }
  
  async show(request, response) {
    const { food_id } = request.params;

    /*if (this.foodShowService && this.foodShowService.execute)*/ 
    const foodsRepository = new FoodsRepository();
    const IngredientsRepository = new IngredientsRepository();
    const foodShowService = new FoodShowService(foodsRepository, IngredientsRepository);

    const result = await foodShowService.execute(food_id);
    return response.status(201).json(result);
  }
  

  async update(request, response) {
    const { title, description, price, ingredients } = request.body;
    const { food_id } = request.params;

    const foodsRepository = new FoodsRepository();
    const foodUpdateService = new FoodUpdateService(foodsRepository);

    const foodsIngredientsRepository = new FoodsIngredientsRepository();
    const foodsIngredientsUpdateService = new FoodsIngredientsUpdateService(foodsIngredientsRepository);

   /*if (this.foodUpdateService && this.foodUpdateService.execute && this.foodIngredientUpdateService && this.foodIngredientUpdateService.execute)*/ 
    await foodUpdateService.execute({
      food_id,
      title,
      description,
      price,
      ingredients,
    });

    await foodsIngredientsUpdateService.execute({ food_id, ingredients });

    return response.status(201).json();
  }
  

  async delete(request, response) {
    const { food_id } = request.params;

    const foodsRepository = new FoodsRepository();
    const foodDeleteService = new FoodDeleteService(foodsRepository);

    /*if (this.foodDeleteService && this.foodDeleteService.execute)*/ 
    await foodDeleteService.execute(food_id);

    return response.status(201).json();
  }
}


module.exports = FoodsController;
