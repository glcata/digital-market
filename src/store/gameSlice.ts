import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GameState {
    gameName: string
}

const initialState: GameState = {
    gameName: ''
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGame: (state, action: PayloadAction<string>) => {
            state.gameName = action.payload;
        }
    },
});

export const {
    setGame
} = gameSlice.actions;

export default gameSlice.reducer;
