import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';

let AddPlayer = ({dispatch}) => {
  let input;
  const ENTER_KEY_CODE = 13;
  const addPlayerOnEnter = (e) => {
    if (e.which === ENTER_KEY_CODE) {
      dispatch(addPlayer(input.value));
      input.value = '';
    }
  };

  return (
    <div>
      <input
        onKeyPress={addPlayerOnEnter}
        ref={node => {input = node}}
      />
    </div>
  );
};

AddPlayer = connect()(AddPlayer);

export default AddPlayer;
