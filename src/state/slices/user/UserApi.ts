import { endpoints } from '@/src/api/endpoints';
import { baseApi } from '@/src/state/baseApi';
import { IBasketChartResponse, IBasketDetailResponse, IUserBasketsResponse, IUserInvestments } from './User.types';

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
        }),
        getBasketChartDetails: builder.query<IBasketChartResponse, { id: string; period: '1w' | '1m' | '6m' | '1y' }>({
            query: ({ id, period }) => endpoints.basketChartDetails(id, period)
        }),
        getBasketDetail: builder.query<IBasketDetailResponse, { id: string }>({
            query: ({ id }) => endpoints.basketDetail(id)
        })
    })
});

export const { useGetInvestmentsQuery, useGetBasketsQuery, useGetBasketChartDetailsQuery, useGetBasketDetailQuery } =
    userApi;
