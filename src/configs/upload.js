const path = require("path");
const multer = require("multer");
const crypto = require("crypto");


const UPLOADS_FOLDER = path.resolve(__dirname, "uploads");
const FOODS_FOLDER = path.resolve(UPLOADS_FOLDER, "foods");
const TMP_FOLDER = path.resolve(UPLOADS_FOLDER, "..", "..", "tmp");
const INGREDIENTS_FOLDER = path.resolve(UPLOADS_FOLDER, "ingredients");

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(_request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};

module.exports = {
    MULTER,
    TMP_FOLDER,
    FOODS_FOLDER,
    UPLOADS_FOLDER,
    INGREDIENTS_FOLDER,
}