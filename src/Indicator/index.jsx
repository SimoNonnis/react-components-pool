import React from 'react';
import PropTypes from 'prop-types';

import { Circle } from './style';

const propTypes = {
  status: PropTypes.oneOf(['awaiting', 'ready']),
};
const defaultProps = {
  status: null,
};

function Indicator({ status }) {
  return <Circle status={status} />;
}

Indicator.propTypes = propTypes;
Indicator.defaultProps = defaultProps;

export default Indicator;
