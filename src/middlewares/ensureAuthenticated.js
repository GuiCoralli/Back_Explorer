const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(req, _res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT Token não informado.", 401);
    };

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id, isAdminAccess } = verify(token, authConfig.jwt.secret);

        req.user = {
            id: Number(user_id),
            isAdminAccess
        };

        return next();
    } catch {
        throw new AppError("JWT Token inválido.", 401);
    };
}

module.exports = ensureAuthenticated;