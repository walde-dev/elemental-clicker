import { createSlice } from '@reduxjs/toolkit'
import { FaWarehouse } from 'react-icons/fa';
import { current } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { updateCoinsPerSecond } from './player';



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
        icon: <FaWarehouse className='building-icon' />,
        baseCost: 125,
        baseProduction: 6,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: true,
    }

}


export const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        buyAmount: (state, action) => {
            const { name } = action.payload
            return Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                return {
                    ...building[1],
                    amount: building[1].amount+1,
                }
                
            })
        
        },
    
    },
})

// Action creators are generated for each case reducer function
export const { buyAmount, updateTotalProduction } = buildingsSlice.actions

export default buildingsSlice.reducer


export function getCost(state) {
    return state.baseCost * Math.pow(1.15, state.amount);
}

export function getProduction(state) {
    return state.baseProduction * state.amount * state.productionMultiplier;
}

export function getTotalProduction(state){
    let sum = 0;
    Object.entries(state).map((building) => {
        sum += getProduction(building[1]);
        
    })
    return sum;
}