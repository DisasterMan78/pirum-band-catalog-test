import React from 'react';
import { PropTypes } from 'prop-types';

const ToggleButton = (props) => {

  const { onClick } = props;

  return (
    <button type="button" onClick={onClick}>+</button>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
