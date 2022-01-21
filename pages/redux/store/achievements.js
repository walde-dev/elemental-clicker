import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { FaCoins } from 'react-icons/fa';
import { useSnackbar } from "notistack";



const initialState = {

    /* Coins in a single game*/
    'coins_earned_1': {
        type: 'coinsEarned',
        name: 'A Thousand Coins',
        unlockText: 'Obtain 1,000 Coins in a single game',
        icon: <FaCoins className='w-8 h-8' />,
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
        checkAllAchievements: (state, action) => {
            const { player } = action.payload;
            const { enqueueSnackbar } = action.payload;
            Object.entries(state).filter(achievement => !achievement[1].isUnlocked).map(achievement => {
                switch (achievement[1].type) {

                    /* Coins in a single Game */
                    case 'coinsEarned':
                        if (player.statistics.coinsEarned.value < achievement[1].amount) return;
                        achievement[1].isUnlocked = true;
                        unlockedAchievemenSnackbar(achievement[1], enqueueSnackbar);
                        break;

                    default:
                        break;
                }
            });
        },

    },
})

// Action creators are generated for each case reducer function
export const { checkAllAchievements } = achievementSlice.actions

export default achievementSlice.reducer

function unlockedAchievemenSnackbar(achievement, enqueueSnackbar) {
    enqueueSnackbar(`achievement ${achievement.name}`, {
        autoHideDuration: 2000,
    });

}