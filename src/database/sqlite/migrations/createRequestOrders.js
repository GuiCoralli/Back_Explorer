const createRequestOrders = `
    CREATE TABLE IF NOT EXISTS requestorders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL REFERENCES users (id),
        total NUMERIC(10,2),
        request_orders_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR DEFAULT 'aberto'
    );
`;

module.exports = createRequestOrders;