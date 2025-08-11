import { endpoints } from '@/src/api/endpoints';
import { baseApi } from '@/src/state/baseApi';
import { IUserBasketsResponse, IUserInvestments } from './User.types';

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getInvestments: builder.query<IUserInvestments, void>({
            query: () => endpoints.investments
        }),
        getBaskets: builder.query<IUserBasketsResponse, void>({
            query: () => endpoints.baskets,
            transformResponse: (response: IUserBasketsResponse) => {
                return response;
            }
        })
    })
});

export const { useGetInvestmentsQuery, useGetBasketsQuery } = userApi;
