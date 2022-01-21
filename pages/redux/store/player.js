import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { GiConsoleController } from 'react-icons/gi';


const initialState = {

    coins: 42343242,
    coinsPerSecond: 0,
    coinsPerSecondMultiplier: 1,
    coinsPerSecondUpgrades: [],
    coinsPerClick: 1,
    coinsPerClickMultiplier: 1,
    coinsPerClickUpgrades: [],
    mana: 1000,
    manaPerSecond: 1,
    progress: {
        value: 0,
    },
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
        },
        coinsEarned: {
            name: 'coinsEarned',
            desc: 'Coins Earned',
            value: 100e15,
        },
    },

}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        click: (state) => {
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
            } else if (type === 'mul') {
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
        },
        addCoinsPerClickUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            state.coinsPerClickUpgrades.push({
                upgrade: upgrade,
                value: value,
            });
        },
        updateCoinsPerClickUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            state.coinsPerClickUpgrades.map(upgradeToUpdate => {
                if(!upgradeToUpdate) return;
                if(upgradeToUpdate.upgrade?.name !== upgrade.name) return;
                console.log('Old value, ', current(upgradeToUpdate))
                console.log('New value, ', value)

                if(upgradeToUpdate.upgrade?.value ===  value) return;
                upgradeToUpdate.value = value;
                //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1
                //state.coinsPerClick *= (3 * Math.pow(getCoinsPerSecond(state), 0.3)/100) +1

            });
        },
        addCoinsPerSecondUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            state.coinsPerSecondUpgrades.push({
                upgrade: upgrade,
                value: value,
            });
        },
        updateCoinsPerSecondUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            state.coinsPerSecondUpgrades.map(upgradeToUpdate => {
                if(!upgradeToUpdate) return;
                if(upgradeToUpdate.upgrade?.name !== upgrade.name) return;
                if(upgradeToUpdate.upgrade?.value ===  value) return;
                upgradeToUpdate.value = value;
                //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1
                //state.coinsPerClick *= (3 * Math.pow(getCoinsPerSecond(state), 0.3)/100) +1

            });
        }

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, addCoinsPerSecondUpgrade, updateCoinsPerSecondUpgrade, addCoinsPerClickUpgrade, updateCoinsPerClickUpgrade, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = playerSlice.actions

export default playerSlice.reducer

export function getCoinsPerClick(state) {
    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerClickUpgrades.map(upgrade => {
        if(!upgrade) return;
        if(upgrade.upgrade.bonusType === 'mul'){
            sumMul *= upgrade.value;
        }else if(upgrade.upgrade.bonusType === 'add'){
            sumAdd += upgrade.value;
        }
    });

    
    return (state.coinsPerClick + sumAdd) * state.coinsPerClickMultiplier * sumMul ;
}

export function getCoinsPerSecond(state){
                    //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1

    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerSecondUpgrades.map(upgrade => {
        if(!upgrade) return;

        if(upgrade.upgrade.bonusType === 'mul'){
            sumMul *= upgrade.value;
        }else if(upgrade.upgrade.bonusType === 'add'){
            sumAdd += upgrade.value;
        }
    });
    return (state.coinsPerSecond +sumAdd) * state.coinsPerSecondMultiplier ;
}
