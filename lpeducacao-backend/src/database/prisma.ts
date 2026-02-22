import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const databaseUrl = process.env.DATABASE_URL?.trim()

if (!databaseUrl) {
  throw new Error('DATABASE_URL nao definida para inicializar Prisma')
}

const adapter = new PrismaNeon({
  connectionString: databaseUrl
})

export const prisma = new PrismaClient({ adapter })
