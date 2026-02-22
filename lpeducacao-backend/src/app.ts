import Fastify from 'fastify'
import { healthRoutes } from './routes/health.js'
import { leadRoutes } from './routes/leads.js'

export const app = Fastify({
  logger: true
})

app.register(healthRoutes)
app.register(leadRoutes)