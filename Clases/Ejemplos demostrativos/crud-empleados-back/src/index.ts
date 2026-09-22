import express, { type Request, type Response } from "express";
import cors from "cors";
import { AppRoutes } from "./routes/routes.js";
import { config } from "./config/config.js";

const app = express();



const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(AppRoutes.routes)

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

