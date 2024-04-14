const UserRepository = require("../repositories/UserRepository");
const SessionCreateService = require("../services/sessions/SessionCreateService")

class SessionsControllers {
  async create(request, response) {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const sessionCreateService = new SessionCreateService(userRepository);

    //const result = await sessionCreateService.execute({ email, password });

    const { user, token, isAdmin } = await sessionCreateService.execute({ email, password });

    return response.status(200).json({ user, token, isAdmin });
  };
}

module.exports = SessionsControllers;