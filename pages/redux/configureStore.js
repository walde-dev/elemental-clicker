import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './store/player';
import buildingsReducer from './store/buildings';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    buildings: buildingsReducer,
  },
})
