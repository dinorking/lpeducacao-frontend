import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

const credentialsPath = path.resolve(
  process.cwd(),
  'credentials',
  'google-service-account.json'
)

const credentials = JSON.parse(
  fs.readFileSync(credentialsPath, 'utf-8')
)

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
})

const sheets = google.sheets({
  version: 'v4',
  auth,
})

export class GoogleSheetsService {
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
      throw new Error('GOOGLE_SHEET_ID não definido no .env')
    }

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
            data.createdAt.toISOString(),
          ],
        ],
      },
    })
  }
}