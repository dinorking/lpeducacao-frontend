import { EmailService } from './EmailService.js';
export class EmailQueue {
    constructor(emailService = new EmailService()) {
        this.emailService = emailService;
        this.queue = [];
        this.processing = false;
    }
    enqueueNewLead(data) {
        this.queue.push({ data });
        this.startWorker();
    }
    startWorker() {
        if (this.processing) {
            return;
        }
        this.processing = true;
        void this.runWorker();
    }
    async runWorker() {
        while (this.queue.length > 0) {
            const job = this.queue.shift();
            if (!job) {
                continue;
            }
            try {
                await this.emailService.sendNewLeadWithRetry(job.data);
            }
            catch (error) {
                console.error('Failed to send queued lead email after retries:', error);
            }
        }
        this.processing = false;
        if (this.queue.length > 0) {
            this.startWorker();
        }
    }
}
export const emailQueue = new EmailQueue();
//# sourceMappingURL=EmailQueue.js.map