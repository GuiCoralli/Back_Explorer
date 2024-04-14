const knex = require("../database/knex");

class UserRepository {
    async create({name, email, password, is_admin}) {
    await knex("users")
    .insert
    ({name, email, password, is_admin});
    }
    
    async findByEmail(email) {
        const userInfos = await knex("users").where({email}).first();
        return userInfos;
    }
    
    
    /*    
      const database = await sqliteConnection();
      const user = await database.get(
        "SELECT * FROM users WHERE id =(?)", 
        [email]
      );

      return user;
     
    
    async create({ name, email, password }) {
        const database = await sqliteConnection();
        
        const user_id = await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );

        return { id: user_id };
    }
    */  
    
    async findById(id) {
        const userInfos = await knex("users").where({email}).first();
        return userInfos;
    }

    /*    const database = await sqliteConnection();
        const user = await database.get(
            "SELECT * FROM users WHERE id =(?)", 
            [id]
        );
        
        return user;
    };*/

    async update( infosUpdate ) {
        await knex("users").update( infosUpdate ).where({ id: infosUpdate.id });

        return userInfos;
    }
}

module.exports = UserRepository;