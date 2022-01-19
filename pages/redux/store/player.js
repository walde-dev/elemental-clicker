import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    coins: 42343242,
    coinsPerSecond: 0,
    coinsPerSecondMultiplier: 1,
    coinsPerClick: 1,
    coinsPerClickMultiplier: 1,
    mana: 1000,
    manaPerSecond: 1,
    statistics: {
        manualClicks: {
            name: 'manualClicks',
            desc: 'Manual Clicks',
            value: 342323423,
        },
        coinsByClicking: {
            name: 'coinsByClicking',
            desc: 'Coins By Clicking',
            value: 324234234,
        }
    },
    progress: {
        value: 0,
    }

}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        click: (state) => {
            console.log(state.coinsPerClickMultiplier)
            state.coins += getCoinsPerClick(state);
        },
        tick: (state) => {
            state.coins += state.coinsPerSecond;
        },
        updateCoinsPerSecond: (state, action) => {
            state.coinsPerSecond = action.payload;
        },
        updateCoinsPerClick: (state, action) => {
            const { value } = action.payload;
            const { type } = action.payload;
            if (type === 'add') {
                state.coinsPerClick += value;
            } else if(type === 'mul'){
                state.coinsPerClickMultiplier *= value;
            }
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
        setStatistics: (state, action) => {
            const { type } = action.payload;
            const { value } = action.payload;

            Object.entries(state.statistics).map(stat => {
                if (stat[1].name !== type) return;
                stat[1].value += value;
            });
            console.log(state.statistics.manualClicks.value)
        },

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = playerSlice.actions

export default playerSlice.reducer

export function getCoinsPerClick(state){
    return state.coinsPerClick * state.coinsPerClickMultiplier;
}