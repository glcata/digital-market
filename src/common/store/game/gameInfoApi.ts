import {BaseApi} from '@/app/api/BaseApi';
import {BaseApiClientConfig} from '@/app/api/BaseApiClientConfig';
import {Category, Game} from '@/common/store';

interface ErrorResponse {
    status: number;
    data: string;
}

export const gamesApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGames: builder.query<Game[], void>({
            queryFn: async () => await BaseApiClientConfig().getGames(),
            providesTags: ['Games'],
        }),
        getGameById: builder.query<Game, number>({
            queryFn: async (id) => {
                const getById = await BaseApiClientConfig().getGameById(id);

                if (getById) return {data: getById};

                return {
                    error: {
                        status: 404,
                        data: 'Game not found'
                    } as ErrorResponse
                };
            },
            providesTags: (_result, _error, id) => [{type: 'Games', id}]
        }),
        getFeaturedGames: builder.query<Game[], void>({
            query: () => async () => await BaseApiClientConfig().getFeaturedGames(),
            providesTags: ['Games']
        }),
        getCategories: builder.query<Category[], void>({
            query: () => async () => await BaseApiClientConfig().getCategories(),
            providesTags: ['Categories']
        }),
    }),
});

export const {
    useGetGamesQuery,
    useGetGameByIdQuery,
    useGetFeaturedGamesQuery,
    useGetCategoriesQuery,
} = gamesApi;
