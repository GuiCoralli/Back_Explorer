const { config } = require("dotenv");
const AppError = require("../../utils/AppError");
const { hash, compare } = require("bcryptjs");

class UserUpdateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  validateInput({ id, name, email, password, old_password }) {
    if (!(id && name && email && password && old_password)) {
      throw new AppError("Para atualizar o usuário, é necessário preencher todos os campos.");
    }
  }

  async checkEmailAvailability(email) {
    const emailIsAvailable = await this.userRepository.findByEmail(email);
    if (emailIsAvailable) {
      throw new AppError("O email digitado já está em uso. Por favor, escolha outro.");
    }
  }

  validateEmail(email) {
    const parametersRequiredForValidEmail = email.split("@")[1].split("").filter(char => char === ".").length;
    const EmailIsValid = parametersRequiredForValidEmail === 1 || parametersRequiredForValidEmail === 2;
    if (!EmailIsValid) {
      throw new AppError("Este e-mail é inválido. Por favor, escolha outro.");
    }
  }

  async updateUser({ id, name, email, password, old_password }) {
    this.validateInput({ id, name, email, password, old_password });

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    if (email !== user.email) {
      await this.checkEmailAvailability(email);
      this.validateEmail(email);
    }

    const isPasswordMatch = await compare(old_password, user.password);

    if (!isPasswordMatch) {
      throw new AppError("Senha antiga incorreta.");
    }

    const passwordHashed = await hash(password, 8);
    const isAdminEmail = email.includes(config().parsed.ADMIN_EMAIL || "@admin.com");
    const is_admin = isAdminEmail;

    const updatedUser = await this.userRepository.update({ id, name, email, password: passwordHashed, is_admin, });

    return updatedUser;
  }
}

module.exports = UserUpdateService;

