import {AxiosInstance} from 'axios';
import {Category, Game, ResponseDataModel} from '@/common/store';

const DELAY = 200;
// Since the data comes from the same server, we simulate a network delay to test fallback UI and observe RTK Query's caching in action.

interface ErrorResponse {
    status: number;
    data: string;
}

export const gameCreateApi = (client: AxiosInstance) => {
    const
        getGames = async (): Promise<ResponseDataModel<Game[]>> => {
            return await client.get('/data/games.json')
                .then(res => new Promise<typeof res>(resolve => setTimeout(() => resolve(res), DELAY)))
                .then(res => res.data)
                .catch(error => console.error(error))
        },

        getGameById = async (id: number): Promise<ResponseDataModel<Game[]>> => {
            return await client.get('/data/games.json')
                .then(res => new Promise<typeof res>(resolve => setTimeout(() => resolve(res), DELAY)))
                .then(res => {
                    const findGame = res.data.content.find((game: Game) => game.id === id);
                    return {...res.data, content: [findGame]};
                })
                .catch(_ => console.error({
                    error: {
                        status: 404,
                        data: 'Game not found'
                    } as ErrorResponse
                }))
        },

        getFeaturedGames = async (): Promise<ResponseDataModel<Game[]>> => {
            return await client.get('/data/games.json')
                .then(res => new Promise<typeof res>(resolve => setTimeout(() => resolve(res), DELAY)))
                .then(res => {
                    const featuredGames = res.data.content.filter((game: Game) => game.featured);
                    return {...res.data, content: [...featuredGames]};
                })
                .catch(error => console.error(error))
        },

        getCategories = async (): Promise<Category[]> => {
            return await client.get('/data/categories.json')
                .then(res => new Promise<typeof res>(resolve => setTimeout(() => resolve(res), DELAY)))
                .then(res => res.data.content)
                .catch(error => console.error(error))
        }

    return {
        getGames,
        getGameById,
        getFeaturedGames,
        getCategories
    }
}