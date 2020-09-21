import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = (props) => (
        <button onClick={props.onDeleteLastItem} disabled={props.isDisabled()}>
          Delete Last Item
        </button>
    );

DeleteLastItem.propTypes = {
  onDeleteLastItem: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired
}

export default DeleteLastItem;
