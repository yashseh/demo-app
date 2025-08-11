export interface IErrorResponse {
    status: number | string;
    data: {
        data: null;
        error: {
            status: number;
            name: string;
            message: string;
            details: Record<string, unknown>;
        };
    };
}

export interface ICustomErrorResponse {
    message: string;
    statusCode: number | string;
}
