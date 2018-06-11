import React from 'react';
import PropTypes from 'prop-types';

import { Container, Bar } from './style';

const propTypes = {
  amount: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  showValue: PropTypes.bool,
  showRawValue: PropTypes.bool,
};

const defaultProps = {
  max: 100,
  color: 'mediumBlue',
  showValue: false,
  showRawValue: false,
  className: '',
};

function ProgressBar({ max, amount, color, showValue, showRawValue, className }) {
  const barStyle = {
    width: `${amount / max * 100}%`,
  };
  let value;

  if (showValue && !showRawValue) {
    value = `${Math.ceil(amount / max * 100)}%`;
  } else if (showRawValue && !showValue) {
    value = amount;
  } else {
    value = null;
  }

  return (
    <div className={className}>
      <Container color={color}>
        <Bar color={color} style={barStyle}>
          {value}
        </Bar>
      </Container>
    </div>
  );
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
