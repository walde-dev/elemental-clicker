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
    },
    'coins_earned_2': {
        type: 'coinsEarned',
        name: 'A Million Coins',
        unlockText: 'Obtain 1M Coins in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e6,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_earned_3': {
        type: 'coinsEarned',
        name: 'A Billion Coins',
        unlockText: 'Obtain 1B Coins in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e9,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_earned_4': {
        type: 'coinsEarned',
        name: 'A Trillion Coins',
        unlockText: 'Obtain 1T Coins in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e12,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_earned_5': {
        type: 'coinsEarned',
        name: 'A Quadrillion Coins',
        unlockText: 'Obtain 1 Qa Coins in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e15,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },

    /* Coins By Clicking */
    'coins_by_clicking_1': {
        type: 'coinsByClicking',
        name: 'Treasure Clicker',
        unlockText: 'Gain 100 coins by clicking in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 100,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_by_clicking_2': {
        type: 'coinsByClicking',
        name: 'Treasure Lurker',
        unlockText: 'Gain 1000 coins by clicking in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1000,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_by_clicking_3': {
        type: 'coinsByClicking',
        name: 'Treasure Finder',
        unlockText: 'Gain 1M coins by clicking in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e6,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_by_clicking_4': {
        type: 'coinsByClicking',
        name: 'Treasure Hunter',
        unlockText: 'Gain 1B coins by clicking in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e9,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },
    'coins_by_clicking_5': {
        type: 'coinsByClicking',
        name: 'Treasure Seeker',
        unlockText: 'Gain 1T coins by clicking in a single game',
        icon: <FaCoins className='w-8 h-8' />,
        amount: 1e12,
        isUnlocked: false,
        isHidden: false,
        isChecked: false,
    },

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

                    /* Coins in a single Game */
                    case 'coinsByClicking':
                        if (player.statistics.coinsByClicking.value < achievement[1].amount) return;
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