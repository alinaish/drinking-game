import { combineReducers } from 'redux';
import { ADD_PLAYER, REMOVE_PLAYER } from './actions';

function players(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      const id = state.length;
      return [
        ...state,
        {
          id,
          name: action.name
        }
      ];
    case REMOVE_PLAYER:
      return state.filter(
        (player) => player.id !== action.id
      );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  players
});

export default rootReducer;
