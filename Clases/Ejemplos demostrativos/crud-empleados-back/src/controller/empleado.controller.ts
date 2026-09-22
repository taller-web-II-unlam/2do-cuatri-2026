import { type Request, type Response } from 'express'
import { EmpleadoRepository } from '../repository/empleado.repository.js'
import { EmpleadoService } from '../services/empleado.service.js';
import type { Empleado } from '../models/empleado.model.js';

const empleadoRepository = new EmpleadoRepository();
const empleadoService = new EmpleadoService(empleadoRepository)

export class EmpleadoController {

    constructor() { }


    public getEmpleados = async (req: Request, res: Response) => {
        try {
            const empleados = await empleadoService.obtenerEmpleados();

            console.log(empleados);


            res.status(200).json(empleados)

        } catch (error) {
            res.status(500).json({ message: "Error al obtener los empleados", error })
        }
    }

    public getEmpleado = async (req: Request, res: Response) => {

        try {

            const id: number = Number(req.params.id)

            if (isNaN(id)) {
                return res.status(400).json("ID inválido")
            }

            const empleado = await empleadoService.obtenerEmpleado(id);


            if (!empleado) {
                return res.status(404).json({ message: "Empleado no encontrado" })
            }

            return res.status(200).json(empleado);


        } catch (error) {
            res.status(500).json({ message: "No se pudo encontrar el empleado", error })

        }
    }

    public createEmpleado = async (req: Request, res: Response) => {

        try {
            const newEmpleado: Empleado = req.body

            const empleado = await empleadoService.crearEmpleado(newEmpleado);

            res.status(201).json(empleado);
        } catch (error) {
            res.status(500).json({ message: "No se pudo crear el empleado", error })

        }

    }

    public actualizarEmpleado = async (req: Request, res: Response) => {

        const id = Number(req.params.id)
        const { nombre, apellido, id_empresa }: Empleado = req.body;

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            const empleadoActualizado = await empleadoService.updateEmpleado(id, { nombre, apellido, id_empresa })
            res.status(200).json(empleadoActualizado);
        } catch (error) {
            res.status(500).json({ message: "No se pudo actualizar el empleado", error })

        }

    }

    public eliminarEmpleado = async (req: Request, res: Response) => {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json("ID inválido")
        }

        try {
            await empleadoService.deleteEmpleado(id);
            res.status(204).send();
        } catch (error: any) {

            if (error.message === 'EmpleadoNoExiste') {
                return res.status(404).json({ message: 'Empleado no encontrado', error })
            }

            res.status(500).json({ message: "No se pudo eliminar el empleado", error })


        }


    }

}
