import express, { type Request, type Response } from "express";
import { config } from "./config/config.js";
import { AppRoutes } from "./routes/routes.js";
import cors from "cors";
const app = express();

const PORT = config.port;

app.use(express.json())

app.use(cors());
app.use(AppRoutes.routes);

app.listen(PORT, () => {
    console.log("Servidor funcionando pa");
})