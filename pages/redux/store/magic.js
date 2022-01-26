import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { GiFastForwardButton } from 'react-icons/gi';
import { ElementalRushIcon } from '../../../public/icons/svg_components/icons';


const initialState = {

    'time_warp': {
        name: 'Time Warp',
        id: 'spell_1',
        effectText: 'Travels 30 seconds into the future, profiting from all sorts of production that happened meanwhile.',
        icon: <GiFastForwardButton className='w-12 h-12 text-grey'/>,
        cost: 200,
        duration: 0,
        isUnlocked: true,
    },
    'elemental_rush': {
        name: 'Elemental Rush',
        id: 'spell_1',
        effectText: 'Increase production of all buildings based on amount of Elemental Essence collected in this game. Lasts 20 seconds.',
        effectValue: 0,
        bonusType: 'mul',
        icon: <ElementalRushIcon className='w-12 h-12 text-grey'/>,
        cost: 500,
        duration: 20,
        isUnlocked: true,
    },

}

export const magicSlice = createSlice({
    name: 'magic',
    initialState,
    reducers: {
        click: (state) => {
            let cpc = getCoinsPerClick(state)
            state.coins += cpc;
        },
        tick: (state) => {
            let cpt = getCoinsPerSecond(state);
            state.coins += cpt;
        },
        setFaction: (state, action) => {
            const { faction } = action.payload;
            state.faction = faction;
        },
        updateCoinsPerSecond: (state, action) => {
            state.coinsPerSecond = action.payload;
        },
        updateCoinsPerClick: (state, action) => {
            const { value } = action.payload;
            const { type } = action.payload;
            if (type === 'add') {
                state.coinsPerClick += value;
            } else if (type === 'mul') {
                state.coinsPerClickMultiplier *= value;
            }
        },
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
        setStatistics: (state, action) => {
            const { type } = action.payload;
            const { value } = action.payload;

            Object.entries(state.statistics).map(stat => {
                if (stat[1].name !== type) return;
                stat[1].value += value;
            });
        },
        addUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;
            const { stat } = action.payload;
            switch (stat) {
                case 'coinsPerClick':
                    state.coinsPerClickUpgrades.push({
                        upgrade: upgrade,
                        value: value,
                        bonusType: bonusType,
                    });
                    break;
                case 'coinsPerSecond':
                    state.coinsPerSecondUpgrades.push({
                        upgrade: upgrade,
                        value: value,
                        bonusType: bonusType,
                    });
                    break;

                default:
                    break;
            }

        },
        updateUpgrade: (state, action) => {
            const { upgrade } = action.payload;
            const { value } = action.payload;
            const { bonusType } = action.payload;
            const { stat } = action.payload;
            switch (stat) {
                case 'coinsPerClick':
                    state.coinsPerClickUpgrades.map(upgradeToUpdate => {
                        if (!upgradeToUpdate) return;
                        if (upgradeToUpdate.upgrade?.name !== upgrade.name) return;


                        if (upgradeToUpdate.upgrade?.value === value) return;
                        if (upgradeToUpdate.bonusType !== bonusType) return;
                        upgradeToUpdate.value = value;

                    });
                    break;

                case 'coinsPerSecond':
                    state.coinsPerSecondUpgrades.map(upgradeToUpdate => {
                        if (!upgradeToUpdate) return;
                        if (upgradeToUpdate.upgrade?.name !== upgrade.name) return
                        if (upgradeToUpdate.upgrade?.value === value) return;
                        if (upgradeToUpdate.bonusType !== bonusType) return;
                        upgradeToUpdate.value = value;

                    });
                    break;

                default:
                    break;
            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { click, tick, setFaction, addUpgrade, updateUpgrade, updateCoinsPerSecond, updateCoinsPerClick, setCoins, setStatistics } = magicSlice.actions

export default magicSlice.reducer

