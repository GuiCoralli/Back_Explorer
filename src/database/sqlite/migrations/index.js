const sqliteConnection = require("../../sqlite");

const createUsers = require("./createUsers");
//const createIngredients = require("./createIngredients");
//const createFoodsIngredients = require("./createFoodsIngredients");
//const createFoods = require("./createFoods");
//const createRequestsFoods = require("./createRequestsFoods");
//const createRequests = require("./createRequests");
//const createPreferences = require("./createPreferences");

async function migrationsRun() {
    const schemas = [
        createUsers
        
        

    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}

module.exports = migrationsRun;



