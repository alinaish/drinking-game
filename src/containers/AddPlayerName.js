import React from 'react';
import { connect } from 'react-redux';
import { addPlayerName } from '../actions';

let AddPlayerName = ({dispatch}) => {
  let input;
  const ENTER_KEY_CODE = 13;
  const addPlayerNameOnEnter = (e) => {
    if (e.which === ENTER_KEY_CODE) {
      dispatch(addPlayerName(input.value));
      input.value = '';
    }
  };

  return (
    <div>
      <input
        onKeyPress={addPlayerNameOnEnter}
        ref={node => {input = node}}
      />
    </div>
  );
};

AddPlayerName = connect()(AddPlayerName);

export default AddPlayerName;
