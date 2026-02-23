import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
export class GoogleSheetsService {
    constructor() {
        this.sheetsClient = null;
    }
    getSheetsClient() {
        if (this.sheetsClient) {
            return this.sheetsClient;
        }
        const credentialsPath = path.resolve(process.cwd(), 'credentials', 'google-service-account.json');
        const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: SCOPES
        });
        this.sheetsClient = google.sheets({
            version: 'v4',
            auth
        });
        return this.sheetsClient;
    }
    async appendLead(data) {
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        if (!spreadsheetId) {
            throw new Error('GOOGLE_SHEET_ID nao definido no .env');
        }
        const sheets = this.getSheetsClient();
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
        });
    }
}
//# sourceMappingURL=GoogleSheetsService.js.map