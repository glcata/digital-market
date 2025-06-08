type SortOptions = 'relevance' | 'price-low' | 'price-high' | 'rating' | 'new';
type Platform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo' | 'Mobile' | 'Linux' | 'Mac';

type ResponseDataModel<T> = {
    timestamp: string,
    status: string,
    content: T
}

interface Game {
    id: number;
    title: string;
    description: string;
    price: number;
    discountedPrice?: number;
    releaseDate: string;
    developer: string;
    publisher: string;
    genres: string[];
    tags: string[];
    platforms: Platform[];
    rating: number;
    coverImage: string;
    screenshots: string[];
    featured?: boolean;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    image?: string;
}

interface Pagination {
    currentPage: number;
    startIndex: number,
    endIndex: number;
    gamesPerPage: number;
}

interface Cart {
    game: Game;
    quantity: number;
}

interface CartItem {
    game: Game;
    quantity: number;
}


interface GameState {
    selectedFilters: {
        platforms: string[];
        genres: string[];
        priceRange: [number, number];
    };
    searchQuery: string;
    sortBy: SortOptions
    cart: Cart[];
    pagination: Pagination;
}

export type {ResponseDataModel, SortOptions, Platform, Game, Category, Pagination, Cart, CartItem, GameState};