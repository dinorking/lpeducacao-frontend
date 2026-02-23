import fs from 'fs'
import path from 'path'
import { google, type sheets_v4 } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export class GoogleSheetsService {
  private sheetsClient: sheets_v4.Sheets | null = null

  private getSheetsClient() {
    if (this.sheetsClient) {
      return this.sheetsClient
    }

    const credentialsPath = path.resolve(
      process.cwd(),
      'credentials',
      'google-service-account.json'
    )

    const credentials = JSON.parse(
      fs.readFileSync(credentialsPath, 'utf-8')
    ) as Record<string, unknown>

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES
    })

    this.sheetsClient = google.sheets({
      version: 'v4',
      auth
    })

    return this.sheetsClient
  }

  async appendLead(data: {
    id: string
    name: string
    email: string
    phone: string
    step: number
    createdAt: Date
  }) {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID nao definido no .env')
    }

    const sheets = this.getSheetsClient()

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            data.id,
            data.name,
            data.email,
            data.phone,
            data.step,
            data.createdAt.toISOString()
          ]
        ]
      }
    })
  }
}
