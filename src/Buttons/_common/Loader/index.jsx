import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerStyled, SpinnerContainer } from './style';

const propTypes = {
  size: PropTypes.oneOf(['small', 'large', '']).isRequired,
};

const iconSize = {
  small: 25,
  large: 35,
  '': 30,
};

const Loader = ({ size }) => (
  <SpinnerContainer>
    &nbsp;
    <SpinnerStyled size={size} width={iconSize[size]} height={iconSize[size]} />
  </SpinnerContainer>
);

Loader.propTypes = propTypes;

export default Loader;
