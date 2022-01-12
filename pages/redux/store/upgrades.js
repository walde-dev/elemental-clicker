import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';


const initialState = {

    '0': {
        id: 0,
        type: 'buildingTier',
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

            Object.entries(state).map((achievement) => {
                switch (achievement[1].type) {

                    /* Building Tiers */
                    case 'buildingTier':
                        if (!achievement[1].isUnlocked) {
                            Object.entries(buildings).map(building => {
                                if (building[1].name.toLowerCase() !== achievement[1].building) return;
                                if (building[1].amount < achievement[1].amount) return;
                                achievement[1].isUnlocked = true;
                                console.log('Upgrade unlocked!')
                            })
                        }
                        break;

                    default:
                        break;
                }
            })
        },
        tick: (state) => {
            state.coins += state.coinsPerSecond;
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
export const { checkAll } = upgradesSlice.actions

export default upgradesSlice.reducer


export function checkBuildingTierUpgrade(building, amount) {
    if (state.amount >= amount) {

    }
}