const createPlates = `
    CREATE TABLE IF NOT EXISTS plates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image VARCHAR,
        name VARCHAR NOT NULL,
        category VARCHAR NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        description VARCHAR NOT NULL
    );
`;

module.exports = createPlates;