import { EmailService, type NewLeadEmailData } from './EmailService.js'

type EmailQueueJob = {
  data: NewLeadEmailData
}

export class EmailQueue {
  private queue: EmailQueueJob[] = []
  private processing = false

  constructor(private readonly emailService: EmailService = new EmailService()) {}

  enqueueNewLead(data: NewLeadEmailData) {
    this.queue.push({ data })
    this.startWorker()
  }

  private startWorker() {
    if (this.processing) {
      return
    }

    this.processing = true
    void this.runWorker()
  }

  private async runWorker() {
    while (this.queue.length > 0) {
      const job = this.queue.shift()

      if (!job) {
        continue
      }

      try {
        await this.emailService.sendNewLeadWithRetry(job.data)
      } catch (error) {
        console.error('Failed to send queued lead email after retries:', error)
      }
    }

    this.processing = false

    if (this.queue.length > 0) {
      this.startWorker()
    }
  }
}

export const emailQueue = new EmailQueue()
