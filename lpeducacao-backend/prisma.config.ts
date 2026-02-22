import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const databaseUrl =
  process.env.DATABASE_URL?.trim() ||
  'postgresql://postgres:postgres@localhost:5432/postgres'

export default defineConfig({
  datasource: {
    url: databaseUrl
  }
})
