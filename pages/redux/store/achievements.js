import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { FaCoins } from 'react-icons/fa';


const initialState = {

    /* Coins in a single game*/
    'coins_in_game_1' : {
        type: 'coinsInSingleGame',
        name: 'A Thousand Coins',
        unlockText: 'Obtain 1,000 Coins in a single game',
        icon: <FaCoins className='w-8 h-8'/>,
        amount: 1000,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    }

}

export const achievementSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
        click: (state) => {
            state.coins += getCoinsPerClick(state);
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { click } = achievementSlice.actions

export default achievementSlice.reducer
