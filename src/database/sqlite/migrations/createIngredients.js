const createIngredients = `
    CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    image VARCHAR NULL
)
`;

module.exports = createIngredients;