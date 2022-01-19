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
        upgrades: [],
        amount: 0,
        isUnlocked: true,
    },
    mine: {
        name: 'Mine',
        icon: <GiGoldMine className='building-icon' />,
        baseCost: 125,
        baseProduction: 6,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: true,
    },
    mill: {
        name: 'Mill',
        icon: <GiWindmill className='building-icon' />,
        baseCost: 600,
        baseProduction: 20,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: true,
    },
    blacksmith: {
        name: 'Blacksmith',
        icon: <GiBlacksmith className='building-icon' />,
        baseCost: 1800,
        baseProduction: 65,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: false,
    },
    cathedral: {
        name: 'Cathedral',
        icon: <GiChurch className='building-icon' />,
        baseCost: 5600,
        baseProduction: 200,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: false,
    },
    temple: {
        name: 'Temple',
        icon: <GiEgyptianTemple className='building-icon' />,
        baseCost: 38000,
        baseProduction: 650,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: false,
    },
    castle: {
        name: 'Castle',
        icon: <GiCastle className='building-icon' />,
        baseCost: 442000,
        baseProduction: 2000,
        productionMultiplier: 1,
        upgrades: [],
        amount: 0,
        isUnlocked: false,
    },

}


export const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        buyBuildingAmount: (state, action) => {
            const { name } = action.payload;
            const { amount } = action.payload;
            Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                building[1].amount += amount;

            })
        },
        unlockBuilding: (state, action) => {
            const { name } = action.payload
            Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                building[1].isUnlocked = true;
            })
        },
        addToMultiplier: (state, action) => {
            const { name } = action.payload;
            const { amount } = action.payload;
            Object.entries(state).map((building) => {
                if (building[1].name !== name) return building[1]
                building[1].productionMultiplier *= amount;
            })
        },
        addUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { name } = action.payload;
            Object.entries(state).map(building => {
                if (building[1].name !== name) return building[1]
                building[1].upgrades.push(upgrade);

            });
            
        }

    },
})

// Action creators are generated for each case reducer function
export const { buyBuildingAmount, unlockBuilding, addToMultiplier } = buildingsSlice.actions

export default buildingsSlice.reducer


export function getCost(state) {
    return state.baseCost * Math.pow(1.15, state.amount);
}

export function getProduction(state) {
    let production = state.baseProduction * state.amount * state.productionMultiplier;
    if(!state.upgrades || state.upgrades.length == 0) return production;
    state.upgrades.map(upgrade => {
        production *= upgrade.multiplier;
    });
    return production;
}

export function getTotalProduction(state) {
    let sum = 0;
    Object.entries(state).map((building) => {
        sum += getProduction(building[1]);

    })
    return sum;
}
