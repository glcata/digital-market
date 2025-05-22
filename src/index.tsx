import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {StrictMode} from 'react';
import {TooltipProvider} from '@/common/components/@radix-ui/tooltip';
import {Toaster} from '@/common/components/@radix-ui/toaster';
import {Toaster as Sonner} from '@/common/components/@radix-ui/sonner';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import NotFound from '@/common/components/NotFound';
import {RoutesConfig} from '@/app/RoutesConfig';
import Store from '@/app/ReduxStoreConfig';
import App from '@/App';
import RouteChangeTracker from '@/app/RouteChangeTracker';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={Store}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <RouteChangeTracker />
                    <Routes>
                        <Route
                            path='/'
                            element={<Navigate to='/store' />}
                        />
                        <Route path='/' element={<App />}>
                            {RoutesConfig.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    Component={route.component}
                                />
                            ))}
                        </Route>

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </Provider>
    </StrictMode>
);