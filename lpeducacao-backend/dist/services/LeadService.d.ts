type StartLeadInput = {
    name: string;
    email: string;
    phone: string;
};
type AdvanceLeadStepInput = {
    id: string;
    step: number;
};
declare class LeadServiceError extends Error {
    readonly statusCode: 400 | 404;
    constructor(message: string, statusCode: 400 | 404);
}
export declare class LeadNotFoundError extends LeadServiceError {
    constructor(id: string);
}
export declare class InvalidLeadStepError extends LeadServiceError {
    constructor(currentStep: number);
}
export declare class LeadService {
    private sheetsService;
    start(data: StartLeadInput): Promise<{
        message: string;
        leadId: string;
    }>;
    advanceStep(data: AdvanceLeadStepInput): Promise<{
        name: string;
        id: string;
        email: string;
        phone: string;
        step: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
//# sourceMappingURL=LeadService.d.ts.map