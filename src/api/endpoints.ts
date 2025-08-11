export const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const endpoints = {
    login: `${baseUrl}send-otp`,
    verifyOtp: `${baseUrl}verify-otp`,
    resentOtp: `${baseUrl}resend-otp`,
    baskets: `${baseUrl}baskets`,
    basketChartDetails: (id: string, period: '1w' | '1m' | '6m' | '1y') => `${baseUrl}baskets/${id}/chart/${period}`,
    basketDetail: (id: string) => `${baseUrl}basket/${id}`,
    investments: `${baseUrl}investments`
};
