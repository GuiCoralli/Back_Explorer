const knex = require("../database/knex");

class AdminAccessRepository {
    async create(name, email, password) {
        await knex("users").insert({
            name,
            email,
            is_adminaccess: true,
            password,
            created_at: new Date().toLocaleString("en-US", { hour12: false }),
            updated_at: new Date().toLocaleString("en-US", { hour12: false })
        });
    };

    async findByAdminAccess() {
        const isAdminAccess = await knex("users")
            .where("is_adminaccess", true)
            .first();
        return isAdminAccess;
    };
}

module.exports = AdminAccessRepository;