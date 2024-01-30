const createRequestOrderItems = `
    CREATE TABLE IF NOT EXISTS request_order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        request_order_id INTEGER NOT NULL REFERENCES orders (id),
        plate_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        total NUMERIC(10,2)
    );
`;

module.exports = createRequestOrderItems;