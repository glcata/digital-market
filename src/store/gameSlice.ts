import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Game} from '@/lib/types';

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
    sortBy: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'new';
    cart: CartItem[];
}

const initialState: GameState = {
    selectedFilters: {
        platforms: [],
        genres: [],
        priceRange: [0, 100],
    },
    searchQuery: '',
    sortBy: 'relevance',
    cart: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setSortBy: (state, action: PayloadAction<'relevance' | 'price-low' | 'price-high' | 'rating' | 'new'>) => {
            state.sortBy = action.payload;
        },
        togglePlatformFilter: (state, action: PayloadAction<string>) => {
            const platform = action.payload;
            if (state.selectedFilters.platforms.includes(platform)) {
                state.selectedFilters.platforms = state.selectedFilters.platforms.filter(p => p !== platform);
            } else {
                state.selectedFilters.platforms.push(platform);
            }
        },
        toggleGenreFilter: (state, action: PayloadAction<string>) => {
            const genre = action.payload;
            if (state.selectedFilters.genres.includes(genre)) {
                state.selectedFilters.genres = state.selectedFilters.genres.filter(g => g !== genre);
            } else {
                state.selectedFilters.genres.push(genre);
            }
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.selectedFilters.priceRange = action.payload;
        },
        resetFilters: (state) => {
            state.selectedFilters = initialState.selectedFilters;
            state.sortBy = initialState.sortBy;
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
    togglePlatformFilter,
    toggleGenreFilter,
    setPriceRange,
    resetFilters,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
} = gameSlice.actions;

export default gameSlice.reducer;
