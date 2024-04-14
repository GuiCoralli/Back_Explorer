require("express-async-errors");
require("dotenv/config");
//Trocamos o database pela migrations depois da importação das tabelas
const migrationsRun = require ("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require ("./configs/upload");
const cors = require("cors");

const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors());
//Padrão definido na API, para utlizar as informações através do corpo da requisição(no formato JSON)
app.use(express.json());


app.use("/files/foods", express.static(uploadConfig.FOODS_FOLDER));
app.use("/files/ingredients", express.static(uploadConfig.INGREDIENTS_FOLDER));

app.use(routes);

app.use(( error, req, res, next ) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status:"error",
            message: error.message
        });
    };

    console.error(error);

    return res.status(500).json({
        status:"error",
        message: "Internal Server Error",
    });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


