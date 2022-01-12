import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    coins: 99,
    coinsPerSecond: 0,
    coinsPerClick: 1,
    mana: 1000,
    manaPerSecond: 1,
    buildings: {
        farm: 0,
        mine: 0,
        mill: 0,
        blacksmith: 0,
        cathedral: 0,
        temple: 0,
        castle: 0,
    }

}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        click: (state) => {
            state.coins += state.coinsPerClick;
        },
        tick: (state) => {
            state.coins += state.coinsPerSecond;
        },
        updateCoinsPerSecond: (state, action) => {
            console.log('PENIS')
            state.coinsPerSecond = action.payload;
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { click, tick, updateCoinsPerSecond, setCoins } = playerSlice.actions

export default playerSlice.reducer