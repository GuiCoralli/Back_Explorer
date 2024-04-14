const { hash, compare} = require ("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/users/UserCreateService");
const UserUpdateService = require("../services/users/UserUpdateService");
const UserAvatarUpdateService = require("../services/users/UserAvatarUpdateService");


class UsersController {
    //Criando nome, email e senha de usuário
    async create (request, response) {
        const { name, email, password } = request.body;
        
        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);
        
        await userCreateService.execute({ name, email, password });

        return response.status(201).json();  
    };

    //Atualizando nome, email e senha do usuário
    async update (request, response) {
        const { name, email, password, old_password } = request.body;
        const user_id = request.user.id

        const userRepository = new UserRepository();
        const userUpdateService = new UserUpdateService(userRepository);

        await userUpdateService.execute({ id: user_id, name, email, password, old_password });
        
        return response.status(201).json();
    }
}

module.exports = UsersController;

    
        /*
        const user = await database.get("SELECT * FROM users WHERE id =(?)", [user_id]);
        
        if(!user) {
            throw new AppError("Usuário não foi encontrado");
        }
        
        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        // SE o email que eu quero atualizar, está sendo utilizado por outra pessoa onde o [user.id] é diferente do meu,
        // significa dizer que ele não é meu.
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já existe.");
        }
        
        user.name = name ?? user.name; 
// Se existir conteúdo dentro de nome (name), SE NÃO existir o que vai ser utilizado será (user.name)
        user.email = email ?? user.email;
// Se existir conteúdo dentro de nome (email), SE NÃO existir o que vai ser utilizado será (user.email)

        // SE digitou a senha nova, porém não digitou a senha antiga, então joga a mensagem de erro
        if( password && !old_password) {
            throw new AppError ("Você precisa informar a SENHA ANTIGA para definir a NOVA SENHA");
        }
        //SE tanto a senha, quanto a senha antiga foi informada, então compare a senha antiga com a senha do user
        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            //SE a senha antiga não confere, jogue a mensagem de erro
            if(!checkOldPassword){
                throw new AppError ("A senha antiga não confere.");
            }
            //CASO a senha bata, criptografe a senha correta informada
            user.password = await hash(password, 8);
        }
            
        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ? `,
        [user.name, user.email, user.password, user_id]
        );

        return response.json();
    
    }*/
