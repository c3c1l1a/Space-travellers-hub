import SpacesxService from '../../services/SpacexService';

const ADD_ALL_ROCKETS = 'spacehub/rockets/ADD_ALL_ROCKETS';

export default function rockets(state = [], action = {}) {
  switch (action.type) {
    case ADD_ALL_ROCKETS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
}