import 'dotenv/config'
import { app } from './app.js'

async function bootstrap() {
  const port = Number(process.env.PORT || 3333)

  try {
    await app.listen({
      host: '0.0.0.0',
      port
    })
    console.log(`Server running on 0.0.0.0:${port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

bootstrap()
