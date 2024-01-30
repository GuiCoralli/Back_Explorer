const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");
const createRequestOrders = require("./createRequestOrders");
const createPlates = require("./createPlates");
const createIngredients = require("./createIngredients");
const createRequestOrderItems = require("./createRequestOrderItems");
const createPreferences = require("./createPreferences");

async function migrationsRun() {
    const schemas = [
        createUsers,
        createRequestOrders,
        createPlates,
        createIngredients,
        createRequestOrderItems,
        createPreferences,
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.error(error));
}

module.exports = migrationsRun;