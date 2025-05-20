import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category, Game} from '@/common/lib/types';
import {categories, mockGames} from '@/common/lib/mockData';

interface ErrorResponse {
    status: number;
    data: string;
}

export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    tagTypes: ['Games', 'Categories'],
    endpoints: (builder) => ({
        getGames: builder.query<Game[], void>({
            queryFn: () => {
                return new Promise<{ data: Game[] }>((resolve) =>
                    setTimeout(() => resolve({data: mockGames}), 700));
            },
            providesTags: ['Games'],
        }),
        getGameById: builder.query<Game, number>({
            queryFn: (id) => {
                const game = mockGames.find(game => game.id === id);

                if (game) return {data: game};

                return {
                    error: {
                        status: 404,
                        data: 'Game not found'
                    } as ErrorResponse
                };
            },
            providesTags: (_result, _error, id) => [{type: 'Games', id}],
        }),
        getFeaturedGames: builder.query<Game[], void>({
            queryFn: () => {
                const featuredGames = mockGames.filter(game => game.featured);

                return new Promise<{ data: Game[] }>((resolve) =>
                    setTimeout(() => resolve({data: featuredGames}), 700));
            },
            providesTags: ['Games'],
        }),
        getCategories: builder.query<Category[], void>({
            queryFn: () => ({data: categories}),
            providesTags: ['Categories'],
        }),
    }),
});

export const {
    useGetGamesQuery,
    useGetGameByIdQuery,
    useGetFeaturedGamesQuery,
    useGetCategoriesQuery,
} = gamesApi;
