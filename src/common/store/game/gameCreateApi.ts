import {AxiosInstance} from 'axios';
import {categories, mockGames} from '@/common/lib/mockData';
import {Category, Game} from '@/common/store';

const DELAY = 500; // Simulated delay for API calls

// @ts-expect-error ignore client
export const gameCreateApi = (client: AxiosInstance) => {
    const
        getGames = async () => {
            // await client.get('/games')
            //     .then(res => {
            //         console.log(res.data);
            //         return res.data;
            //     })
            //     .catch(error => console.error(error));
            return new Promise<{ data: Game[] }>((resolve) =>
                setTimeout(() => resolve({data: mockGames}), DELAY));
        },

        getGameById = async (id: number) =>
            await new Promise<Game | undefined>(res =>
                setTimeout(() => res(mockGames.find(game => game.id === id)), DELAY)),

        getFeaturedGames = async () =>
            await new Promise<Game[]>(res =>
                setTimeout(() => res(mockGames.filter(game => game.featured)), DELAY)),

        getCategories = async () =>
            await new Promise<Category[]>(res =>
                setTimeout(() => res(categories), DELAY));

    return {
        getGames,
        getGameById,
        getFeaturedGames,
        getCategories
    }
}