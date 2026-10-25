import express, { type Request, type Response } from "express";
import { EmpleadoRepository } from "../repository/empleado.repository.js";
import { EmpleadoService } from "../services/empleado.service.js";
import type { Empleado } from "../models/empleado.model.js";


const empleadoRepository = new EmpleadoRepository();
const empleadoService = new EmpleadoService(empleadoRepository);
export class EmpleadoController {


    public getEmpleados = async (req: Request, res: Response) => {

        try {

            const empleados = await empleadoService.buscarEmpleados();

            res.status(200).json(empleados)
        } catch (error: any) {

            if (error.message) {
                res.status(500).json({ message: error.message })
            }
            res.status(500).json({ message: "Error al obtener los empleados" })
        }


    }


    public getEmpleado = async (req: Request, res: Response) => {

        try {

            const id: number = Number(req.params.id)

            if (isNaN(id)) {
                return res.status(400).json("ID invalido")
            }

            const empleado = await empleadoService.obtenerEmpleado(id);

            res.status(200).json(empleado)


        } catch (error: any) {
            if (error.message === 'NoExisteEmpleado') {
                return res.status(404).json({ message: 'Empleado no encontrado', error })
            }
            res.status(500).json({ message: "Error al obtener el empleado" })

        }

    }

    public crearEmpleado = async (req: Request, res: Response) => {
        try {
            const newEmpleado: Empleado = req.body

            const empleado = await empleadoService.crearEmpleado(newEmpleado);

            res.status(201).json(empleado)
        } catch (error) {
            res.status(500).json({ message: "Error al crear el empleado" })

        }
    }

    public actualizarEmpleado = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const empleado: Empleado = req.body;

        if (isNaN(id)) {
            return res.status(400).json("ID invalido")
        }

        try {
            const empleadoActualizado = await empleadoService.actualizarEmpleado(id, empleado)
            res.status(200).json(empleadoActualizado);

        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el empleado" })
        }
    }

    public eliminarEmpleado = async (req: Request, res: Response) => {

        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("ID invalido")
            }

            await empleadoService.eliminarEmpleado(id);
            res.status(204).send();

        } catch (error: any) {
            if (error.message === 'NoExisteEmpleado') {
                return res.status(404).json({ message: 'Empleado no encontrado', error })
            }
            res.status(500).json({ message: "Error al eliminar el empleado" })

        }
    }

}