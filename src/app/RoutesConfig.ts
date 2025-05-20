import React from 'react';
import Store from '@/pages/Store';
import Categories from '@/pages/Categories';
import Library from '@/pages/Library';
import {GameDetails} from '@/features/GameDetails';

type RouteConfig = {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export const RoutesConfig = <RouteConfig[]>[
    {
        path: '/store',
        component: Store,
        exact: true
    },
    {
        path: '/categories',
        component: Categories
    },
    {
        path: '/library',
        component: Library
    },
    {
        path: '/game/:id',
        component: GameDetails
    }
];