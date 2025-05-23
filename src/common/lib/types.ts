export interface Game {
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

export type Platform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo' | 'Mobile' | 'Linux' | 'Mac';

export interface Category {
    id: number;
    name: string;
    slug: string;
    image?: string;
}

export interface CartItem {
    game: Game;
    quantity: number;
}
