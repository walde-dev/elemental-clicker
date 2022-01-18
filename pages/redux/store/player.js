import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    coins: 3420000000,
    coinsPerSecond: 0,
    coinsPerClick: 1,
    mana: 1000,
    manaPerSecond: 1,
    statistics: {
        manualClicks: {
            name: 'manualClicks',
            desc: 'Manual Clicks',
            value: 10000,
        }
    },

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
            state.coinsPerSecond = action.payload;
        },
        updateCoinsPerClick: (state, action) => {
            state.coinsPerClick = action.payload;
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
        setStatistics: (state, action) => {
            const { type } = action.payload;
            const { value } = action.payload;

            Object.entries(state.statistics).map(stat => {
                if(stat[1].name !== type)  return;
                stat[1].value += value; 
            });
            console.log(state.statistics.manualClicks.value)
        },

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = playerSlice.actions

export default playerSlice.reducer