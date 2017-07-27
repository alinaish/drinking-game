import React from 'react';
import { connect } from 'react-redux';
import { removePlayer } from '../actions';

let RemovePlayer = ({onPlayerRemove}) => {
  return (
    <a onClick={onPlayerRemove}>remove</a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayerRemove: (id) => {
      dispatch(removePlayer(id));
    }
  };
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    onPlayerRemove: () => dispatchProps.onPlayerRemove(ownProps.id)
  };
}

RemovePlayer = connect(
  null,
  mapDispatchToProps,
  mergeProps
)(RemovePlayer);

export default RemovePlayer;
