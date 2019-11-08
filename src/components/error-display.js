import React from 'react';
import { PropTypes } from 'prop-types';

const ErrorDisplay = (props) => {
  let advice;

  const { error } = props;

  if (error === 'Failed to fetch') {
    advice = 'Is json-server running?';
  }

  return (
    <p className="error-display">
      Error:&nbsp;
      <span className="error-message">{error}</span>
      <br />
      <span className="error-advice">{advice}</span>
    </p>
  );
};

ErrorDisplay.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorDisplay;
