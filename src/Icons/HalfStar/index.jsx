import React from 'react';
import PropTypes from 'prop-types';

/**
 * HalfStar Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function HalfStar({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>HalfStar Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M100,38.76,62.3,38.1,50,2.44,37.7,38.1,0,38.76,30.12,61.48l-11,36.06L50,75.93l30.9,21.63-11-36.08ZM74.24,88.39,50,71.43h0V13.78h0l9.64,28,29.58.52L65.61,60.1Z"
      />
    </svg>
  );
}

HalfStar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

HalfStar.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'halfStarIcon',
  classNamePath: 'emptyStarIconPath',
};

export default HalfStar;
