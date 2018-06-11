import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Circle } from './style';

/**
 * Spinner Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @returns {React.Component}
 */
function Spinner({ width, height, fill, className }) {
  return (
    <Svg
      className={className}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <title>Spinner Icon</title>

      <Circle className="" cx="25" cy="25" r="20" stroke={fill} />
    </Svg>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

Spinner.defaultProps = {
  className: null,
  width: 40,
  height: 40,
  fill: 'currentColor',
};

export default Spinner;
