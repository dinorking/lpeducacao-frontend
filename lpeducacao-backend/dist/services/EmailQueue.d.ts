import { EmailService, type NewLeadEmailData } from './EmailService.js';
export declare class EmailQueue {
    private readonly emailService;
    private queue;
    private processing;
    constructor(emailService?: EmailService);
    enqueueNewLead(data: NewLeadEmailData): void;
    private startWorker;
    private runWorker;
}
export declare const emailQueue: EmailQueue;
//# sourceMappingURL=EmailQueue.d.ts.map