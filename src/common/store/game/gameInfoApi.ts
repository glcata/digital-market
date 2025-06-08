import {BaseApi} from '@/app/api/BaseApi';
import {BaseApiClientConfig} from '@/app/api/BaseApiClientConfig';
import {Category, Game, ResponseDataModel} from '@/common/store';

export const gamesApi = BaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGames: builder.query<Game[], void>({
            query: () => async () => await BaseApiClientConfig().getGames(),
            transformResponse: (response: ResponseDataModel<Game[]>) => response.content,
            providesTags: ['Games'],
        }),
        getGameById: builder.query<Game, number>({
            query: (id: number) => async () => await BaseApiClientConfig().getGameById(id),
            transformResponse: (response: ResponseDataModel<Game[]>): Game => {
                const [game] = response.content;
                return game;
            },
            providesTags: (_result, _error, id) => [{type: 'Games', id}]
        }),
        getFeaturedGames: builder.query<Game[], void>({
            query: () => async () => await BaseApiClientConfig().getFeaturedGames(),
            transformResponse: (response: ResponseDataModel<Game[]>): Game[] => response.content,
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
