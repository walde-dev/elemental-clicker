import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { GiConsoleController } from 'react-icons/gi';


const initialState = {

    coins: 10e7,
    coinsPerSecond: 0,
    coinsPerSecondMultiplier: 1,
    coinsPerSecondUpgrades: [],
    coinsPerClick: 1,
    coinsPerClickMultiplier: 1,
    coinsPerClickUpgrades: [],
    mana: 1000,
    manaPerSecond: 1,
    faction: 'none',
    progress: {
        value: 0,
    },
    statistics: {
        manualClicks: {
            name: 'manualClicks',
            desc: 'Manual Clicks',
            value: 343434340,
        },
        coinsByClicking: {
            name: 'coinsByClicking',
            desc: 'Coins By Clicking',
            value: 343434340,
        },
        coinsEarned: {
            name: 'coinsEarned',
            desc: 'Coins Earned',
            value: 34343434,
        },

    },

}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        click: (state) => {
            let cpc = getCoinsPerClick(state)
            state.coins += cpc;
        },
        tick: (state) => {
            let cpt = getCoinsPerSecond(state);
            state.coins += cpt;
        },
        setFaction: (state, action) => {
            const { faction } = action.payload;
            state.faction = faction;
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
            const { bonusType } = action.payload;
            state.coinsPerClickUpgrades.push({
                upgrade: upgrade,
                value: value,
                bonusType: bonusType,
            });
        },
        updateCoinsPerClickUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;

            state.coinsPerClickUpgrades.map(upgradeToUpdate => {
                if (!upgradeToUpdate) return;
                if (upgradeToUpdate.upgrade?.name !== upgrade.name) return;


                if (upgradeToUpdate.upgrade?.value === value) return;
                if (upgradeToUpdate.bonusType !== bonusType) return;
                upgradeToUpdate.value = value;
                //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1
                //state.coinsPerClick *= (3 * Math.pow(getCoinsPerSecond(state), 0.3)/100) +1

            });
        },
        addCoinsPerSecondUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;
            state.coinsPerSecondUpgrades.push({
                upgrade: upgrade,
                value: value,
                bonusType: bonusType,
            });
        },
        updateCoinsPerSecondUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            state.coinsPerSecondUpgrades.map(upgradeToUpdate => {
                if (!upgradeToUpdate) return;
                if (upgradeToUpdate.upgrade?.name !== upgrade.name) return;
                if (upgradeToUpdate.upgrade?.value === value) return;
                upgradeToUpdate.value = value;
                //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1
                //state.coinsPerClick *= (3 * Math.pow(getCoinsPerSecond(state), 0.3)/100) +1

            });
        }

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, setFaction, addCoinsPerSecondUpgrade, updateCoinsPerSecondUpgrade, addCoinsPerClickUpgrade, updateCoinsPerClickUpgrade, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = playerSlice.actions

export default playerSlice.reducer

export function getCoinsPerClick(state) {
    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerClickUpgrades.map(upgrade => {
        console.log('\n', upgrade.value, upgrade.bonusType)
        if (!upgrade) return;
        if (upgrade.bonusType === 'mul') {
            if (upgrade.value == 0) return;
            sumMul *= upgrade.value;
        } else if (upgrade.bonusType === 'add') {

            sumAdd += upgrade.value;
        }
    });

    return (state.coinsPerClick + sumAdd) * state.coinsPerClickMultiplier * sumMul;
}

export function getCoinsPerSecond(state) {
    //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1

    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerSecondUpgrades.map(upgrade => {
        if (!upgrade) return;

        if (upgrade.upgrade.bonusType === 'mul') {
            if (upgrade.value = 0) return;
            sumMul *= upgrade.value;
        } else if (upgrade.upgrade.bonusType === 'add') {
            sumAdd += upgrade.value;
        }
    });
    return (state.coinsPerSecond + sumAdd) * state.coinsPerSecondMultiplier;
}
