import NetInfo from '@react-native-community/netinfo';
import {
    BaseQueryApi,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { router } from 'expo-router';
import { ICustomErrorResponse, IErrorResponse } from './global.types';

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_BASE_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, api) => {
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const state = api.getState() as any;
        const token = state?.login?.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        console.log('############################## headers ######################################');
        console.log('prepareHeaders', api);
        console.log('headers ------', headers);
        console.log('############################## headers end ######################################');
        return headers;
    }
});

const queryFetcher = async (
    args: FetchArgs,
    api: BaseQueryApi,
    extraOptions: Record<string, unknown>
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
    console.log(
        '\n############################## Request ######################################',
        '\n API ------',
        args.url,
        '\n Api request ------',
        JSON.stringify(args),
        '\napi name ------',
        JSON.stringify(api)
    );
    console.log('\n############################## Request End ######################################');
    const isConnected = await NetInfo.fetch();
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
        if (result.error?.status === 401) {
            resetNavigation();
        } else if (result.error.status === 'FETCH_ERROR') {
            if (isConnected.isInternetReachable || isConnected.isConnected) {
                return {
                    error: {
                        message: 'Server not reachable.Please try again later',
                        statusCode: 10
                    } as any
                };
            } else {
                return {
                    error: {
                        message: 'Your internet is a little wonky right now',
                        statusCode: 0
                    } as any
                };
            }
        } else if (result.error.status === 'TIMEOUT_ERROR') {
            return {
                error: {
                    message: 'Server not reachable.Please try again later',
                    statusCode: 10
                } as any
            };
        } else {
            const transformedError = transformErrorResponse(result?.error as IErrorResponse);
            return { error: transformedError as any };
        }
    }
    console.log('\n############################## Result End ######################################');
    console.log(JSON.stringify(result));
    console.log('\n############################## Result End ######################################');

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: queryFetcher as any,
    endpoints: () => ({})
});

const resetNavigation = () => {
    router.dismissAll();
    router.replace('/(auth)/signupOrlogin');
};

export const transformErrorResponse = (response: IErrorResponse): ICustomErrorResponse => {
    return {
        message: response?.data?.error?.message ?? 'Something went wrong',
        statusCode: response?.status ?? 0
    };
};
