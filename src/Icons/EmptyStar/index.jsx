import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStar Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function EmptyStar({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>EmptyStar Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M80.9,97.56,50,75.94,19.11,97.55l11-36.06L0,38.76l37.71-.66L50,2.44,62.3,38.1l37.7.66L69.91,61.49ZM50,71.24,74,88,65.44,60,88.77,42.42l-29.24-.51L50,14.26,40.47,41.91l-29.23.51L34.58,60,26.05,88Z"
      />
    </svg>
  );
}

EmptyStar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

EmptyStar.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'emptyStarIcon',
  classNamePath: 'emptyStarIconPath',
};

export default EmptyStar;
