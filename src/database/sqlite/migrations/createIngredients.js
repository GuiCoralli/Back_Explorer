const createIngredients = `
    CREATE TABLE IF NOT EXISTS ingredients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        plate_id INTEGER NOT NULL REFERENCES plates (id) ON DELETE CASCADE,
        name VARCHAR NOT NULL
    );
`;

module.exports = createIngredients;