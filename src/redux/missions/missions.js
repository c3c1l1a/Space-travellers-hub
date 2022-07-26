import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../services/missionsAPI';

const FETCH_ALL = 'missions/FETCH_ALL';
const FULFIL_FETCH_ALL = 'mission/FETCH_ALL/fulfilled';

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
    case FULFIL_FETCH_ALL: {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
}

export const fetchAllMissions = createAsyncThunk(
  FETCH_ALL,
  async (_, thunkAPI) => {
    const response = await http.get();
    thunkAPI.dispatch({
      type: FULFIL_FETCH_ALL,
      payload: response.data,
    });
  },
);
