import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "./config/config.js";
import { PrismaClient } from "./prisma/client.js";

const adapter = new PrismaPg({
    connectionString : config.db
})

export const prisma = new PrismaClient({
    adapter
})