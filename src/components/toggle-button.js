import React from 'react';
import { PropTypes } from 'prop-types';

const ToggleButton = (props) => {

  const {
          onClick,
          state,
          type,
          title,
        } = props,
        id = `-${title.replace(/[^a-z0-9]/gi, '-')}`;

  return (
    <span className="toggle-wrapper">
      <label className="hide-element" htmlFor={id}>
        {state ? 'Hide' : 'Show'}
        &nbsp;
        {`${title} ${type}`}
      </label>
      <button id={id} type="button" onClick={onClick} className={`toggle-button${state ? ' open' : ' close'}`}>
        {state ? 'Close' : 'Open'}
        <span className="icon" />
      </button>
    </span>
  );
};

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ToggleButton;
