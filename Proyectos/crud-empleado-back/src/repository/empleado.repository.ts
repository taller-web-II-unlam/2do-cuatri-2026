import type { Empleado } from "../models/empleado.model.js";
import { prisma } from "../prisma.config.js";

export class EmpleadoRepository {

    async buscarEmpleados() {
        const empleados = await prisma.empleado.findMany({
            include: { empresa: true }
        })

        return empleados;
    }

    async buscarEmpleadoById(id: number) {
        const empleado = await prisma.empleado.findUnique({
            where: { id: id },
            include: {
                empresa: true
            }
        })

        return empleado
    }

    async crearEmpleado(data: { nombre: string, apellido: string }) {
        return await prisma.empleado.create(
            {
                data
            }
        )
    }

    async actualizarEmpleado(id: number, data:Empleado) {
        const {nombre, apellido} = data
        
        const empleado = await prisma.empleado.update({
            where: { id },
            data: { nombre, apellido },
        })

        return empleado;
    }

    async eliminarEmpleado(id: number) {
        return await prisma.empleado.delete({
            where: { id }
        })
    }

}