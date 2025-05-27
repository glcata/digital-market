import {BaseQuery} from './BaseQuery'
import {createApi} from '@reduxjs/toolkit/query/react';

export const BaseApi = createApi({
    tagTypes: [
        'Games',
        'Categories'
    ],
    keepUnusedDataFor: 10,
    baseQuery: BaseQuery(),
    endpoints: () => ({})
});