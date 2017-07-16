import React from 'react';
import { connect } from 'react-redux';

let PlayersList = ({ playerNames }) => {
  return (
    <ul>
      {playerNames.map((name, i) => {
        return (
          <li key={i}>{name}</li>
        );
      })}
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    playerNames: state.playerNames
  };
};

PlayersList = connect(mapStateToProps)(PlayersList);

export default PlayersList;
