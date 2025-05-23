import {configureStore} from '@reduxjs/toolkit';
import gameReducer from '@/common/store/gameSlice';
import {gamesApi} from '@/common/store/api';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {
        game: gameReducer,
        [gamesApi.reducerPath]: gamesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesApi.middleware)
})

export type IRootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;