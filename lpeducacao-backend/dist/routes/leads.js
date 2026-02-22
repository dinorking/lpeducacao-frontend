import { InvalidLeadStepError, LeadNotFoundError, LeadService } from '../services/LeadService.js';
const leadSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        step: { type: 'integer' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
    }
};
export async function leadRoutes(app) {
    const leadService = new LeadService();
    app.post('/leads/start', {
        schema: {
            body: {
                type: 'object',
                required: ['name', 'email', 'phone'],
                properties: {
                    name: {
                        type: 'string',
                        minLength: 2
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    },
                    phone: {
                        type: 'string',
                        minLength: 8
                    }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        leadId: { type: 'string' }
                    }
                }
            }
        }
    }, async (request) => {
        const { name, email, phone } = request.body;
        return leadService.start({
            name,
            email,
            phone
        });
    });
    app.patch('/leads/:id/step', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string', minLength: 1 }
                }
            },
            body: {
                type: 'object',
                required: ['step'],
                properties: {
                    step: { type: 'integer', minimum: 1 }
                }
            },
            response: {
                200: leadSchema,
                400: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                },
                404: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const { step } = request.body;
        try {
            return await leadService.advanceStep({ id, step });
        }
        catch (error) {
            if (error instanceof LeadNotFoundError ||
                error instanceof InvalidLeadStepError) {
                return reply.status(error.statusCode).send({ message: error.message });
            }
            throw error;
        }
    });
}
//# sourceMappingURL=leads.js.map