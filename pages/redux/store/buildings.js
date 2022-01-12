import { createSlice } from '@reduxjs/toolkit'
import { FaWarehouse } from 'react-icons/fa';
import { current } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { updateCoinsPerSecond } from './player';
import { GiBlacksmith, GiCastle, GiChurch, GiEgyptianTemple, GiGoldMine, GiWindmill } from 'react-icons/gi';



const initialState = {

    farm: {
        name: 'Farm',
        icon: <FaWarehouse className='building-icon' />,
        baseCost: 10,
        baseProduction: 2,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: true,
    },
    mine: {
        name: 'Mine',
        icon: <GiGoldMine className='building-icon' />,
        baseCost: 125,
        baseProduction: 6,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: true,
    },
    mill: {
        name: 'Mill',
        icon: <GiWindmill className='building-icon' />,
        baseCost: 600,
        baseProduction: 20,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: true,
    },
    blacksmith: {
        name: 'Blacksmith',
        icon: <GiBlacksmith className='building-icon' />,
        baseCost: 1800,
        baseProduction: 65,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: false,
    },
    cathedral: {
        name: 'Cathedral',
        icon: <GiChurch className='building-icon' />,
        baseCost: 5600,
        baseProduction: 200,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: false,
    },
    temple: {
        name: 'Temple',
        icon: <GiEgyptianTemple className='building-icon' />,
        baseCost: 38000,
        baseProduction: 650,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: false,
    },
    castle: {
        name: 'Castle',
        icon: <GiCastle className='building-icon' />,
        baseCost: 442000,
        baseProduction: 2000,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: false,
    },

}


export const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        buyAmount: (state, action) => {
            const { name } = action.payload
            Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                building[1].amount += 1;

            })
        },
        unlockBuilding: (state, action) => {
            const { name } = action.payload
            console.log(action)
            Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                building[1].isUnlocked = true;
            })
        },

    },
})

// Action creators are generated for each case reducer function
export const { buyAmount, unlockBuilding } = buildingsSlice.actions

export default buildingsSlice.reducer


export function getCost(state) {
    return state.baseCost * Math.pow(1.15, state.amount);
}

export function getProduction(state) {
    return state.baseProduction * state.amount * state.productionMultiplier;
}

export function getTotalProduction(state) {
    let sum = 0;
    Object.entries(state).map((building) => {
        sum += getProduction(building[1]);

    })
    return sum;
}
