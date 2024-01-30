const createPreferences = `
    CREATE TABLE IF NOT EXISTS preferences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL REFERENCES users (id),
        plate_id INTEGER NOT NULL REFERENCES plates (id) ON DELETE CASCADE
    );
`;

module.exports = createPreferences;