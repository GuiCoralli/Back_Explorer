const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');



describe("UserCreateService", ()=> {
    //Colocamos as duas variáveis no começo, instanciando antes de cada teste. 
    //Com isso, reaproveitamos duas linhas de cód.e assim deixamos mais enxuto nosso teste. 
    let userRepositoryInMemory = null;
    let userCreateService = null;
    // Essa função antes dos testes executando e instanciando o repositório do usuário.
    beforeEach(( ) => {
        userRepositoryInMemory = new  UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    });
    //1º teste para verificar usuário criado.
    it ("user should be create", async () => {
        const user = {
            name:"User Test",
            email: "user@test.com",
            password:"123456"
        };

        const userCreated = await userCreateService.execute(user);
        expect(userCreated).toHaveProperty("id");
    });
    //2º teste para verificar, se o usuário não criou uma conta com email existente.
    it("User shouldn't created with an existing email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user@test.com",
            password: "123456",
        };

        const user2 = {
            name: "User Test 2",
            email: "user@test.com",
            password: "456789",
        };
        
        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."));

    });
});

module.exports = UserRepositoryInMemory;