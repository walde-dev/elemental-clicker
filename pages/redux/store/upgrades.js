import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';


const initialState = {

    '0': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '1': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '2': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '3': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '4': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '5': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '6': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '7': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '8': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },
    '9': {
        id: 0,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 200,
        building: 'farm',
        amount: 5,
        name: 'Farm Upgrade I',
        unlockText: 'Build 5 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
    },

}

export const upgradesSlice = createSlice({
    name: 'upgrades',
    initialState,
    reducers: {
        checkAll: (state, action) => {
            const buildings = action.payload;

            Object.entries(state).map((upgrade) => {
                switch (upgrade[1].type) {

                    /* Building Tiers */
                    case 'buildingTier':
                        if (!upgrade[1].isUnlocked) {
                            Object.entries(buildings).map(building => {
                                if (building[1].name.toLowerCase() !== upgrade[1].building) return;
                                upgrade[1].icon = building[1].icon;
                                if (building[1].amount < upgrade[1].amount) return;
                                upgrade[1].isUnlocked = true;
                            })
                        }
                        break;

                    default:
                        break;
                }
            })
        },
        buyUpgrade: (state, action) => {
            console.log('buying')
            const upgradeToUnlock = action.payload;
            Object.entries(state).map(upgrade => {
                if (upgrade[1].id !== upgradeToUnlock.id) return;
                upgrade[1].isBought = true;
            })
        },
        updateCoinsPerSecond: (state, action) => {
            state.coinsPerSecond = action.payload;
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { checkAll, buyUpgrade } = upgradesSlice.actions

export default upgradesSlice.reducer


export function checkBuildingTierUpgrade(building, amount) {
    if (state.amount >= amount) {

    }
}