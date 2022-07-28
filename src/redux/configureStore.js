import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './missions/missions';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
