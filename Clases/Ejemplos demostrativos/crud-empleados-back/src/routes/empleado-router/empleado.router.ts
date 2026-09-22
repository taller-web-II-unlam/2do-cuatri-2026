import { Router } from "express";
import { EmpleadoController } from "../../controller/empleado.controller.js";


const empleadoRouter = Router();

const empleadoController = new EmpleadoController();


empleadoRouter.get('/',empleadoController.getEmpleados.bind(empleadoController));
empleadoRouter.get('/:id',empleadoController.getEmpleado.bind(empleadoController));
empleadoRouter.post('/',empleadoController.createEmpleado.bind(empleadoController));
empleadoRouter.put('/:id',empleadoController.actualizarEmpleado.bind(empleadoController));
empleadoRouter.delete('/:id',empleadoController.eliminarEmpleado.bind(empleadoController));

export default empleadoRouter;