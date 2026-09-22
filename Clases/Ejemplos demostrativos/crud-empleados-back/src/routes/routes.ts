import { Router } from "express";
import empleadoRouter from "./empleado-router/empleado.router.js";

export class AppRoutes {


    static get routes(): Router {
        const router = Router();

        router.use("/api/empleado", empleadoRouter)

        return router
    }

}