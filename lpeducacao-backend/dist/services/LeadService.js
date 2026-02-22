import { prisma } from '../database/prisma.js';
import { emailQueue } from './EmailQueue.js';
import { GoogleSheetsService } from './GoogleSheetsService.js';
class LeadServiceError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = new.target.name;
    }
}
export class LeadNotFoundError extends LeadServiceError {
    constructor(id) {
        super(`Lead not found: ${id}`, 404);
    }
}
export class InvalidLeadStepError extends LeadServiceError {
    constructor(currentStep) {
        super(`Step must be greater than current step (${currentStep})`, 400);
    }
}
export class LeadService {
    constructor() {
        this.sheetsService = new GoogleSheetsService();
    }
    async start(data) {
        const lead = await prisma.lead.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                step: 1
            }
        });
        // 🔹 Efeito colateral 1: email (assíncrono)
        emailQueue.enqueueNewLead({
            name: lead.name,
            email: lead.email,
            phone: lead.phone
        });
        // 🔹 Efeito colateral 2: Google Sheets (assíncrono)
        this.sheetsService
            .appendLead({
            id: lead.id,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            step: lead.step,
            createdAt: lead.createdAt
        })
            .catch(err => {
            console.error('Erro ao escrever lead no Google Sheets:', err);
        });
        return {
            message: `Lead recebido: ${lead.name}`,
            leadId: lead.id
        };
    }
    async advanceStep(data) {
        const lead = await prisma.lead.findUnique({
            where: { id: data.id }
        });
        if (!lead) {
            throw new LeadNotFoundError(data.id);
        }
        if (!Number.isInteger(data.step) || data.step <= lead.step) {
            throw new InvalidLeadStepError(lead.step);
        }
        const updatedLead = await prisma.lead.update({
            where: { id: data.id },
            data: { step: data.step }
        });
        // 🔹 Registrar avanço de etapa no Google Sheets (opcional, mas recomendado)
        this.sheetsService
            .appendLead({
            id: updatedLead.id,
            name: updatedLead.name,
            email: updatedLead.email,
            phone: updatedLead.phone,
            step: updatedLead.step,
            createdAt: updatedLead.createdAt
        })
            .catch(err => {
            console.error('Erro ao atualizar step no Google Sheets:', err);
        });
        return updatedLead;
    }
}
//# sourceMappingURL=LeadService.js.map