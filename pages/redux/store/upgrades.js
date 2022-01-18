import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';


const initialState = {

    /* Building Tiers */
    /* Farm */
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
        isChecked: false,
    },
    '1': {
        id: 1,
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 6580,
        building: 'farm',
        amount: 25,
        name: 'Farm Upgrade II',
        unlockText: 'Build 25 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '2': {
        id: 2,
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 1.07e7,
        building: 'farm',
        amount: 75,
        name: 'Farm Upgrade III',
        unlockText: 'Build 75 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    '3': {
        id: 3,
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 5.09e11,
        building: 'farm',
        amount: 100,
        name: 'Farm Upgrade IV',
        unlockText: 'Build 100 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    '4': {
        id: 4,
        type: 'buildingTier',
        tier: 5,
        icon: 0,
        cost: 6.895e14,
        building: 'farm',
        amount: 150,
        name: 'Farm Upgrade V',
        unlockText: 'Build 150 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 500%',
        multiplier: 6,
        isChecked: false,
    },
    '5': {
        id: 5,
        type: 'buildingTier',
        tier: 6,
        icon: 0,
        cost: 9.716e20,
        building: 'farm',
        amount: 200,
        name: 'Farm Upgrade VI',
        unlockText: 'Build 200 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    '6': {
        id: 6,
        type: 'buildingTier',
        tier: 7,
        icon: 0,
        cost: 1.331e27,
        building: 'farm',
        amount: 300,
        name: 'Farm Upgrade VII',
        unlockText: 'Build 300 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    '7': {
        id: 7,
        type: 'buildingTier',
        tier: 8,
        icon: 0,
        cost: 1.787e33,
        building: 'farm',
        amount: 400,
        name: 'Farm Upgrade VIII',
        unlockText: 'Build 400 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '8': {
        id: 8,
        type: 'buildingTier',
        tier: 9,
        icon: 0,
        cost: 2.36e39,
        building: 'farm',
        amount: 500,
        name: 'Farm Upgrade IX',
        unlockText: 'Build 500 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    '9': {
        id: 9,
        type: 'buildingTier',
        tier: 10,
        icon: 0,
        cost: 3.08e45,
        building: 'farm',
        amount: 600,
        name: 'Farm Upgrade X',
        unlockText: 'Build 600 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '10': {
        id: 10,
        type: 'buildingTier',
        tier: 11,
        icon: 0,
        cost: 3.978e51,
        building: 'farm',
        amount: 700,
        name: 'Farm Upgrade XI',
        unlockText: 'Build 700 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },

    /* Mine */

    '11': {
        id: 11,
        type: 'buildingTier',
        tier: 1,
        icon: 0,
        cost: 2510,
        building: 'mine',
        amount: 5,
        name: 'Mine Upgrade I',
        unlockText: 'Build 5 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    '12': {
        id: 12,
        type: 'buildingTier',
        tier: 2,
        icon: 0,
        cost: 82300,
        building: 'mine',
        amount: 25,
        name: 'Mine Upgrade II',
        unlockText: 'Build 25 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '13': {
        id: 13,
        type: 'buildingTier',
        tier: 3,
        icon: 0,
        cost: 1.338e8,
        building: 'mine',
        amount: 75,
        name: 'Mine Upgrade III',
        unlockText: 'Build 75 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    '3': {
        id: 3,
        type: 'buildingTier',
        tier: 4,
        icon: 0,
        cost: 6.363e12,
        building: 'mine',
        amount: 100,
        name: 'Mine Upgrade IV',
        unlockText: 'Build 100 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    '4': {
        id: 4,
        type: 'buildingTier',
        tier: 5,
        icon: 0,
        cost: 8.619e15,
        building: 'mine',
        amount: 150,
        name: 'Mine Upgrade V',
        unlockText: 'Build 150 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 500%',
        multiplier: 6,
        isChecked: false,
    },
    '5': {
        id: 5,
        type: 'buildingTier',
        tier: 6,
        icon: 0,
        cost: 1.215e22,
        building: 'mine',
        amount: 200,
        name: 'Mine Upgrade VI',
        unlockText: 'Build 200 Mines',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Mine production by 400%',
        multiplier: 5,
        isChecked: false,
    },
    '6': {
        id: 6,
        type: 'buildingTier',
        tier: 7,
        icon: 0,
        cost: 1.331e27,
        building: 'farm',
        amount: 300,
        name: 'Farm Upgrade VII',
        unlockText: 'Build 300 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },
    '7': {
        id: 7,
        type: 'buildingTier',
        tier: 8,
        icon: 0,
        cost: 1.787e33,
        building: 'farm',
        amount: 400,
        name: 'Farm Upgrade VIII',
        unlockText: 'Build 400 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '8': {
        id: 8,
        type: 'buildingTier',
        tier: 9,
        icon: 0,
        cost: 2.36e39,
        building: 'farm',
        amount: 500,
        name: 'Farm Upgrade IX',
        unlockText: 'Build 500 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 100%',
        multiplier: 2,
        isChecked: false,
    },
    '9': {
        id: 9,
        type: 'buildingTier',
        tier: 10,
        icon: 0,
        cost: 3.08e45,
        building: 'farm',
        amount: 600,
        name: 'Farm Upgrade X',
        unlockText: 'Build 600 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 200%',
        multiplier: 3,
        isChecked: false,
    },
    '10': {
        id: 10,
        type: 'buildingTier',
        tier: 11,
        icon: 0,
        cost: 3.978e51,
        building: 'farm',
        amount: 700,
        name: 'Farm Upgrade XI',
        unlockText: 'Build 700 Farms',
        isBought: false,
        isUnlocked: false,
        effectText: 'Increase Farm production by 300%',
        multiplier: 4,
        isChecked: false,
    },



    /* Clicks */
    '': {
        id: 1,
        type: 'clicks',
        tier: 1,
        icon: 0,
        cost: 100,
        amount: 100,
        isBought: false,
        isUnlocked: false,
        name: 'Clicks Upgrade I',
        unlockText: 'Click 100 times',
        effectText: 'Increase Click reward by 100%',
        multiplier: 2,
        isChecked: false,
    }

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

                    /* Clicks */
                    case 'clicks':
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
        setChecked: (state, action) => {
            const upgradeToCheck = action.payload;
            Object.entries(state).map(upgrade => {
                if (upgrade[1].id !== upgradeToCheck.id) return;
                upgrade[1].isChecked = true;
            })
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { checkAll, buyUpgrade, setChecked } = upgradesSlice.actions

export default upgradesSlice.reducer


export function checkBuildingTierUpgrade(building, amount) {
    if (state.amount >= amount) {

    }
}