import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { GiConsoleController } from 'react-icons/gi';


const initialState = {

    coins: 4e9,
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
            value: 4e90,
        },
        coinsByClicking: {
            name: 'coinsByClicking',
            desc: 'Coins By Clicking',
            value: 4e9,
        },
        coinsEarned: {
            name: 'coinsEarned',
            desc: 'Coins Earned',
            value: 4e9,
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
        addUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;
            const { stat } = action.payload;
            switch (stat) {
                case 'coinsPerClick':
                    state.coinsPerClickUpgrades.push({
                        upgrade: upgrade,
                        value: value,
                        bonusType: bonusType,
                    });
                    break;
                case 'coinsPerSecond':
                    state.coinsPerSecondUpgrades.push({
                        upgrade: upgrade,
                        value: value,
                        bonusType: bonusType,
                    });
                    break;

                default:
                    break;
            }

        },
        updateUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;
            const { stat } = action.payload;
            switch (stat) {
                case 'coinsPerClick':
                    state.coinsPerClickUpgrades.map(upgradeToUpdate => {
                        if (!upgradeToUpdate) return;
                        if (upgradeToUpdate.upgrade?.name !== upgrade.name) return;


                        if (upgradeToUpdate.upgrade?.value === value) return;
                        if (upgradeToUpdate.bonusType !== bonusType) return;
                        upgradeToUpdate.value = value;

                    });
                    break;

                case 'coinsPerSecond':
                    state.coinsPerSecondUpgrades.map(upgradeToUpdate => {
                        if (!upgradeToUpdate) return;
                        if (upgradeToUpdate.upgrade?.name !== upgrade.name) return
                        if (upgradeToUpdate.upgrade?.value === value) return;
                        if (upgradeToUpdate.bonusType !== bonusType) return;
                        upgradeToUpdate.value = value;

                    });
                    break;

                default:
                    break;
            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, setFaction, addUpgrade, updateUpgrade, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = playerSlice.actions

export default playerSlice.reducer

export function getCoinsPerClick(state) {
    let sumBaseAdd = 0;
    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerClickUpgrades.map(upgrade => {
        if (!upgrade) return;
        if (upgrade.bonusType === 'mul') {
            if (upgrade.value == 0) return;
            sumMul *= upgrade.value;
        } else if (upgrade.bonusType === 'add') {
            sumAdd += upgrade.value;
        } else if (upgrade.bonusType === 'baseAdd') {
            sumBaseAdd += upgrade.value;
        }
    });
    //console.log('(',state.coinsPerClick, sumBaseAdd,')', state.coinsPerClickMultiplier, sumMul, sumAdd)
    return ((state.coinsPerClick + sumBaseAdd) * state.coinsPerClickMultiplier + sumAdd)* sumMul ;
}

export function getCoinsPerSecond(state) {
    //state.coinsPerSecond *=  (3 * Math.pow(getCoinsPerClick(state), 0.3)/100) +1
    let sumBaseAdd = 0;
    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerSecondUpgrades.map(upgrade => {
        if (!upgrade) return;
        if (upgrade.upgrade.bonusType === 'mul') {
            if (upgrade.value == 0) return;
            sumMul *= upgrade.value;
        } else if (upgrade.upgrade.bonusType === 'add') {
            sumAdd += upgrade.value;
        } else if (upgrade.bonusType === 'baseAdd') {
            sumBaseAdd += upgrade.value;
        }
    });
    return (state.coinsPerSecond + sumBaseAdd) * state.coinsPerSecondMultiplier * sumMul + sumAdd;
}

export function getCoinsPerSecondUpgradeAmount(state){
    let sumBaseAdd = 0;
    let sumAdd = 0;
    let sumMul = 1;
    state.coinsPerSecondUpgrades.map(upgrade => {
        if (!upgrade) return;
        if (upgrade.upgrade.bonusType === 'mul') {
            if (upgrade.value == 0) return;
            sumMul *= upgrade.value;
        } else if (upgrade.upgrade.bonusType === 'add') {
            sumAdd += upgrade.value;
        } else if (upgrade.bonusType === 'baseAdd') {
            sumBaseAdd += upgrade.value;
        }
    });
    return [sumBaseAdd, sumAdd, sumMul];

}
