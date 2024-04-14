const AppError = require("../utils/AppError");
const authConfigs = require("../configs/auth");
const { verify } = require("jsonwebtoken");


const UserRepository = require("../repositories/UserRepository");
const FoodsRepository = require("../repositories/FoodsRepository");
const RequestRepository = require("../repositories/RequestRepository");

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT não informado!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfigs.jwt.secret);

    const userRepository = new UserRepository();
    const userInfos = await userRepository.findById(Number(user_id));

    if (!userInfos) {
      throw new AppError("Usuário não encontrado.", 401);
    }

    request.user = {
      id: Number(user_id),
      isAdmin: userInfos.is_admin,
    };

    next();
  } catch (error) {
    throw new AppError("JWT inválido.", 401);
  }
}

//Logica para verificar se é usuário ADMIN
async function ensureIsAdmin(request, response, next) {
  if (!request.user || !request.user.isAdmin) {
    throw new AppError("Usuário não autorizado.", 403);
  }

  next();
}

//Logica para verificar se NÃO é usuário ADMIN
async function ensureIsNotAdmin(request, response, next) {
  if (request.user && request.user.isAdmin) {
    throw new AppError("Usuário não autorizado.", 403);
  }

  next();
}

//Logica para certificar se já existe usuário registrado
async function ensuresFoodsAreRegistered(request, response, next) {
  const { food_id } = request.params;

  const foodsRepository = new FoodsRepository();
  const foodInfos = await foodsRepository.findById(food_id);

  if (!foodInfos) {
    throw new AppError("Este prato não está cadastrado.");
  }

  next();
}

//Logica para certificar se é usuário ou Admin registrado
async function ensureIsAdminOrUserRequest(request, response, next) {
  const user_id = request.user.id;
  const { request_id } = request.params;

  const userRepository = new UserRepository();
  const requestRepository = new RequestRepository();

  const user = await userRepository.findById(user_id);
  const requests = await requestRepository.findById(request_id);

  if (!user || !requests) {
    throw new AppError("Informações não encontradas.");
  }

  const theRequestIsfromUser = user.id === request.user_id;

  if (!user.is_admin && !theRequestIsfromUser) {
    throw new AppError("Acesso não autorizado.");
  }

  next();
}

//Exportando os módulos das funções
module.exports = {
  ensureAuthenticated,
  ensureIsAdmin,
  ensureIsNotAdmin,
  ensuresFoodsAreRegistered,
  ensureIsAdminOrUserRequest,
};
