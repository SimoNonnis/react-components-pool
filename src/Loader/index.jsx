import React from 'react';
import PropTypes from 'prop-types';

import theme from 'themes';

import { Spinner } from '../Icons';
import { Container, SpinnerWrap } from './style';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  opacity: PropTypes.string,
};
const defaultProps = {
  className: null,
  color: theme.color.mediumBlue,
  iconWidth: 40,
  iconHeight: 40,
  width: '100%',
  height: '100%',
  background: '#ffffff',
  opacity: '0.7',
};

const Loader = ({
  className,
  color,
  iconWidth,
  iconHeight,
  width,
  height,
  background,
  opacity,
}) => (
  <Container
    id="loader"
    className={className}
    width={width}
    height={height}
    background={background}
    opacity={opacity}
  >
    <SpinnerWrap>
      <Spinner fill={color} width={iconWidth} height={iconHeight} />
    </SpinnerWrap>
  </Container>
);

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
