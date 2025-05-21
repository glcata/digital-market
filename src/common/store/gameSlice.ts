import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Game} from '@/common/lib/types';

export type SortOptions = 'relevance' | 'price-low' | 'price-high' | 'rating' | 'new';

export interface Pagination {
    currentPage: number;
    startIndex: number,
    endIndex: number;
    gamesPerPage: number;
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
    cart: CartItem[];
    pagination: Pagination;
}

const initialState: GameState = {
    selectedFilters: {
        platforms: [],
        genres: [],
        priceRange: [0, 100]
    },
    searchQuery: '',
    sortBy: 'relevance',
    cart: [],
    pagination: {
        currentPage: 1,
        startIndex: 0,
        endIndex: 12,
        gamesPerPage: 12
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;

            state.pagination = initialState.pagination;
        },
        setSortBy: (state, action: PayloadAction<SortOptions>) => {
            state.sortBy = action.payload;
        },
        setSelectedPlatforms: (state, action: PayloadAction<string>) => {
            const platform = action.payload;
            if (state.selectedFilters.platforms.includes(platform)) {
                state.selectedFilters.platforms = state.selectedFilters.platforms.filter(p => p !== platform);
            } else {
                state.selectedFilters.platforms.push(platform);
            }

            state.pagination = initialState.pagination;
        },
        setSelectedGenres: (state, action: PayloadAction<string>) => {
            const genre = action.payload;
            if (state.selectedFilters.genres.includes(genre)) {
                state.selectedFilters.genres = state.selectedFilters.genres.filter(g => g !== genre);
            } else {
                state.selectedFilters.genres.push(genre);
            }

            state.pagination = initialState.pagination;
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.selectedFilters.priceRange = action.payload;

            state.pagination = initialState.pagination;
        },
        setPagination: (state, action: PayloadAction<Pagination>) => {
            const {currentPage, startIndex, endIndex} = action.payload;
            state.pagination.currentPage = currentPage;
            state.pagination.startIndex = startIndex;
            state.pagination.endIndex = endIndex;
            state.pagination.gamesPerPage = action.payload.gamesPerPage;
        },
        resetFilters: (state, action: PayloadAction<boolean>) => {
            if (action.payload) state.searchQuery = initialState.searchQuery;
            state.selectedFilters = initialState.selectedFilters;
            state.sortBy = initialState.sortBy;
        },
        resetPlatforms: (state) => {
            state.selectedFilters.platforms = initialState.selectedFilters.platforms;
        },
        resetPagination: (state) => {
            state.pagination = initialState.pagination;
        },
        resetGenres: (state) => {
            state.selectedFilters.genres = initialState.selectedFilters.genres;
        },
        addToCart: (state, action: PayloadAction<Game>) => {
            const gameToAdd = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item.game.id === gameToAdd.id);

            if (existingItemIndex >= 0) {
                state.cart[existingItemIndex].quantity += 1;
            } else {
                state.cart.push({game: gameToAdd, quantity: 1});
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.game.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ gameId: number, quantity: number }>) => {
            const {gameId, quantity} = action.payload;
            const itemIndex = state.cart.findIndex(item => item.game.id === gameId);

            if (itemIndex >= 0) {
                if (quantity > 0) {
                    state.cart[itemIndex].quantity = quantity;
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const {
    setSearchQuery,
    setSortBy,
    setSelectedPlatforms,
    setSelectedGenres,
    setPagination,
    setPriceRange,
    resetFilters,
    resetPlatforms,
    resetGenres,
    resetPagination,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
} = gameSlice.actions;

export default gameSlice.reducer;
