import React from 'react';
import { connect } from 'react-redux';
import RemovePlayer from './RemovePlayer'

let PlayersList = ({ players }) => {
  return (
    <ul>
      {players.map((player, i) => {
        return (
          <li key={player.id}>
            {player.name}
            <RemovePlayer id={player.id}/>
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

PlayersList = connect(mapStateToProps)(PlayersList);

export default PlayersList;
