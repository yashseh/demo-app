export interface ILoginInitialState {
    phone: string;
    token: string;
}

export interface ILoginRequest {
    mobile: string;
}

export interface ILoginResponseData {
    otp: string;
}

export interface ILoginResponse {
    status: string;
    code: number;
    data: {
        otp: string;
    }[];
}

export interface IVerifyOtpRequest {
    otp: string;
    mobile: string;
}

export interface IVerifyOtpResponseData {
    accessToken: string;
}

export interface IVerifyOtpResponse {
    status: string;
    code: number;
    data: {
        accessToken: string;
    }[];
}

export interface IResentOtpRequest {
    mobile: string;
}

export interface IResentOtpResponseData {
    otp: string;
}

export interface IResentOtpResponse {
    status: string;
    code: number;
    data: {
        message: string;
    }[];
}
