export const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const endpoints = {
    login: `${baseUrl}send-otp`,
    verifyOtp: `${baseUrl}verify-otp`,
    resentOtp: `${baseUrl}resend-otp`,
    baskets: `${baseUrl}baskets`,
    basketDetail: (id: string) => `${baseUrl}baskets/${id}`,
    investments: `${baseUrl}investments`
};
