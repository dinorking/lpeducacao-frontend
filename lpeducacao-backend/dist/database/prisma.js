import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
const databaseUrl = process.env.DATABASE_URL?.trim();
if (!databaseUrl) {
    throw new Error('DATABASE_URL nao definida para inicializar Prisma');
}
const adapter = new PrismaPg({
    connectionString: databaseUrl
});
export const prisma = new PrismaClient({ adapter });
//# sourceMappingURL=prisma.js.map