const FETCH_ALL = 'categories/CHECK_STATUS';

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
    default:
      return state;
  }
}

export function fetchAll() {
  return {
    type: fetchAll,
  };
}
