import { endpoints } from '@/src/api/endpoints';
import { methods } from '@/src/api/methods';
import { baseApi } from '@/src/state/baseApi';
import {
    ILoginRequest,
    ILoginResponse,
    ILoginResponseData,
    IResentOtpRequest,
    IResentOtpResponseData,
    IVerifyOtpRequest,
    IVerifyOtpResponse,
    IVerifyOtpResponseData
} from './Login.types';
const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponseData, ILoginRequest>({
            query: (data) => ({
                url: endpoints.login,
                method: methods.post,
                body: data
            }),
            transformResponse: (response: ILoginResponse) => {
                return response.data[0];
            }
        }),
        verifyOtp: builder.mutation<IVerifyOtpResponseData, IVerifyOtpRequest>({
            query: (data) => ({
                url: endpoints.verifyOtp,
                method: methods.post,
                body: data
            }),
            transformResponse: (response: IVerifyOtpResponse) => {
                return response.data[0];
            }
        }),
        resentOtp: builder.mutation<IResentOtpResponseData, IResentOtpRequest>({
            query: (data) => ({
                url: endpoints.resentOtp,
                method: methods.post,
                body: data
            }),
            transformResponse: (response: ILoginResponse) => {
                return response.data[0];
            }
        })
    })
});

export const { useLoginMutation, useVerifyOtpMutation, useResentOtpMutation } = loginApi;
