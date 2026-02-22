export type NewLeadEmailData = {
    name: string;
    email: string;
    phone: string;
};
export declare class EmailService {
    private transporter;
    sendNewLead(data: NewLeadEmailData): Promise<void>;
    sendNewLeadWithRetry(data: NewLeadEmailData): Promise<void>;
}
//# sourceMappingURL=EmailService.d.ts.map