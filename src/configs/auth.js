module.exports = {
    jwt: {
        sercret: process.env.AUTH_SECRET || "default",
        expiresIn: "1d"
    }
}
