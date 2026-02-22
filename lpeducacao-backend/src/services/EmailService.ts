import nodemailer from 'nodemailer'

export type NewLeadEmailData = {
  name: string
  email: string
  phone: string
}

const MAX_RETRY_ATTEMPTS = 3
const RETRY_DELAYS_MS = [1000, 3000, 5000]

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  async sendNewLead(data: NewLeadEmailData) {
    const fromEmail = process.env.EMAIL_USER
    const toEmail = process.env.EMAIL_TO

    if (!fromEmail || !toEmail) {
      throw new Error('EMAIL_USER and EMAIL_TO must be configured')
    }

    await this.transporter.verify()

    await this.transporter.sendMail({
      from: `"LP Educacao" <${fromEmail}>`,
      to: toEmail,
      subject: 'Novo lead recebido',
      text: `
Novo lead cadastrado:

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
`
    })
  }

  async sendNewLeadWithRetry(data: NewLeadEmailData) {
    let lastError: unknown

    for (let attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
      try {
        await this.sendNewLead(data)
        return
      } catch (error) {
        lastError = error

        if (attempt >= MAX_RETRY_ATTEMPTS) {
          break
        }

        const delay =
          RETRY_DELAYS_MS[attempt - 1] ??
          RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1] ??
          1000

        await sleep(delay)
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new Error('Unknown error while sending lead email')
  }
}
