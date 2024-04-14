const { config } = require("dotenv");
const AppError = require("../../utils/AppError");
const { hash } = require("bcryptjs");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  validateInput({ name, email, password }) {
    if (!(name && email && password)) {
      throw new AppError("É preciso preencher todos os campos para fazer o cadastro");
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
      throw new AppError("O e-mail digitado está inválido. Por favor, escolha outro.");
    }
  }

  async execute({ name, email, password }) {
    this.validateInput({ name, email, password });
    await this.checkEmailAvailability(email);
    this.validateEmail(email);

    const passwordHashed = await hash(password, 8);
    const isAdminEmail = email.includes(config().parsed.ADMIN_EMAIL || "@admin.com");
    const is_admin = isAdminEmail;

    const userRegistered = await this.userRepository.create({ name, email, password: passwordHashed, is_admin, });

    return userRegistered;
  }
}

module.exports = UserCreateService;
