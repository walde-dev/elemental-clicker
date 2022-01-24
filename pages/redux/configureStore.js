import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './store/player';
import buildingsReducer from './store/buildings';
import upgradesReducer from './store/upgrades';
import achievementsReducer from './store/achievements';
import magicReducer from './store/magic';


export const store = configureStore({
  reducer: {
    player: playerReducer,
    buildings: buildingsReducer,
    upgrades: upgradesReducer,
    achievements: achievementsReducer,
    magic: magicReducer,
  },
})
