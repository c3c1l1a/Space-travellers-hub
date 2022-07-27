import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './missions/missions';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,

});

const store = configureStore({
  reducer: rootReducer,
  rockets,
});

export default store;
