import Fastify from 'fastify'
import cors from '@fastify/cors'
import { healthRoutes } from './routes/health.js'
import { leadRoutes } from './routes/leads.js'

const allowedOrigins = (process.env.CORS_ORIGINS ?? '')
  .split(',')
  .map(origin => origin.trim())
  .filter(origin => origin.length > 0)

function isAllowedOrigin(origin: string | undefined) {
  if (!origin) {
    return true
  }

  if (allowedOrigins.length === 0) {
    return true
  }

  if (allowedOrigins.includes(origin)) {
    return true
  }

  if (/^https:\/\/([a-z0-9-]+\.)*vercel\.app$/i.test(origin)) {
    return true
  }

  if (/^https?:\/\/localhost(:\d+)?$/i.test(origin)) {
    return true
  }

  if (/^https?:\/\/127\.0\.0\.1(:\d+)?$/i.test(origin)) {
    return true
  }

  return false
}

export const app = Fastify({
  logger: true
})

app.register(cors, {
  origin: (origin, callback) => {
    callback(null, isAllowedOrigin(origin))
  },
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
})

app.setErrorHandler((error, request, reply) => {
  request.log.error(
    {
      err: error,
      method: request.method,
      url: request.url
    },
    'Unhandled request error'
  )

  const maybeStatusCode = (error as { statusCode?: number }).statusCode
  const statusCode =
    typeof maybeStatusCode === 'number' &&
    maybeStatusCode >= 400 &&
    maybeStatusCode < 600
      ? maybeStatusCode
      : 500

  const errorMessage = error instanceof Error ? error.message : ''
  const message =
    statusCode >= 500 ? 'Internal server error' : errorMessage || 'Request failed'

  if (!reply.sent) {
    reply.status(statusCode).send({
      message,
      statusCode
    })
  }
})

app.register(healthRoutes)
app.register(leadRoutes)
