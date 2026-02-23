import 'dotenv/config';
import { app } from './app.js';
import { prisma } from './database/prisma.js';
async function warmupDatabase() {
    try {
        await prisma.$queryRawUnsafe('SELECT 1');
        app.log.info('Prisma connection warmup completed');
    }
    catch (error) {
        app.log.warn({
            err: error
        }, 'Prisma warmup failed');
    }
}
async function bootstrap() {
    const port = Number(process.env.PORT || 3333);
    try {
        await app.listen({
            host: '0.0.0.0',
            port
        });
        console.log(`Server running on 0.0.0.0:${port}`);
        void warmupDatabase();
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=server.js.map