import { combineReducers } from 'redux';
import { ADD_PLAYER_NAME } from './actions';

function playerNames(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER_NAME:
      return [
        ...state,
        action.name
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  playerNames
});

export default rootReducer;
