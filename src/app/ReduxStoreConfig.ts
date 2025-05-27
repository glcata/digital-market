import {configureStore} from '@reduxjs/toolkit';
import {BaseApi} from '@/app/api/BaseApi';
import {gameReducer} from '@/common/store';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {
        game: gameReducer,
        [BaseApi.reducerPath]: BaseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(BaseApi.middleware)
})

export type IRootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;