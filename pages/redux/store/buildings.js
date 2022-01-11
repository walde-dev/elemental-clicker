import { createSlice } from '@reduxjs/toolkit'
import { FaWarehouse } from 'react-icons/fa';

const initialState = {

    farm: {
        name: 'Farm',
        icon: <FaWarehouse className='building-icon' />,
        baseCost: 10,
        baseProduction: 2,
        productionMultiplier: 1,
        amount: 0,
        isUnlocked: true,
       
    }

}

export const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        click: (state) => {
            state.coins += state.coinsPerClick;
        },
        tick: (state) => {
            state.coins += state.coinsPerSecond;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { click, tick, incrementByAmount } = buildingsSlice.actions

export default buildingsSlice.reducer


export function getCost(state){
    return state.baseCost * Math.pow(1.15, state.amount);
}

export function getProduction(state){
    return state.baseProduction * state.amount * state.productionMultiplier;
}