export const ADD_PLAYER_NAME = 'ADD_PLAYER_NAME';

export function addPlayerName(name) {
  return {
    type: ADD_PLAYER_NAME,
    name
  };
}
