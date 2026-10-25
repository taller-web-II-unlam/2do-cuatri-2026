import { Router } from "express";
import empleadoRouter from "./empleadoRoutes/empleados.routes.js";

export class AppRoutes {


    static get routes(): Router {
        const router = Router();
        router.use("/api/empleado", empleadoRouter)

        return router
    }

}