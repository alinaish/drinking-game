export const ADD_PLAYER = 'ADD_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    name
  };
}


export function removePlayer(id) {
  return {
    type: REMOVE_PLAYER,
    id
  };
}
