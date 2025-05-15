import {Toaster} from '@/components/ui/toaster';
import {Toaster as Sonner} from '@/components/ui/sonner';
import {TooltipProvider} from '@/components/ui/tooltip';
import {BrowserRouter, Route, Routes} from 'react-router';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import {gamesApi} from '@/store/api';
import gameReducer from '@/store/gameSlice';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        game: gameReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesApi.middleware)
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

const App = () => (
    <Provider store={Store}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </Provider>
);

export default App;
