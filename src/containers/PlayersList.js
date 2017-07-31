import React from 'react';
import { connect } from 'react-redux';
import { removePlayer } from '../actions'

let PlayersList = ({ players, onPlayerRemove}) => {
  return (
    <ul>
      {players.map((player, i) => {
        return (
          <li key={player.id}>
            {player.name}
            <a onClick={() => onPlayerRemove(player.id)}>remove</a>
          </li>
        );
      })}
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerRemove: (id) => {
      dispatch(removePlayer(id));
    }
  };
}

PlayersList = connect(mapStateToProps, mapDispatchToProps)(PlayersList);

export default PlayersList;
