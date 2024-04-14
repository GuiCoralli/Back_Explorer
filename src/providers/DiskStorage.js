const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage {
    //Pasta para salvar o arquivo, mudar da pasta temporária e enviar para a pasta de upload
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        );

        return file;
    };
    ////Pasta para deletar o arquivo buscando na pasta de Upload
    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
        } catch {
            return
        };

        await fs.promises.unlink(filePath);
    };
}

module.exports = DiskStorage;