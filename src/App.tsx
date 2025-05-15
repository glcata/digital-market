import {Toaster} from '@/components/ui/toaster';
import {Toaster as Sonner} from '@/components/ui/sonner';
import {TooltipProvider} from '@/components/ui/tooltip';
import {BrowserRouter, Route, Routes} from 'react-router';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {}
})

export type IRootState = ReturnType<typeof Store.getState>;
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
