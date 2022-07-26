import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../services/missionsAPI';

const FETCH_ALL = 'missions/FETCH_ALL';
const FULFIL_FETCH_ALL = 'mission/FETCH_ALL/fulfilled';
const RESERVE = 'mission/RESERVE';

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
    case FULFIL_FETCH_ALL: {
      const stateItems = action.payload.map((item) => ({
        mission_id: item.mission_id,
        mission_name: item.mission_name,
        description: item.description,
      }));
      return stateItems;
    }
    case RESERVE: {
      const newState = state.map((item) => {
        if (item.mission_id === action.missionId) {
          const newItem = { ...item, reserved: 'true' };
          return newItem;
        }
        return item;
      });
      return newState;
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

export function updateReservedState(missionId) {
  return {
    type: RESERVE,
    missionId,
  };
}
