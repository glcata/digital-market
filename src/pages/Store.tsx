import React from 'react';
import {FeaturedGames} from '../features/FeaturedGames';
import Library from '@/pages/Library';
import Categories from '@/pages/Categories';
import Newsletter from '@/common/components/Newsletter';

const Store: React.FC = () => {
    return (
        <>
            <FeaturedGames />
            <Library />
            <Categories />
            <Newsletter />
        </>
    );
};

export default Store;