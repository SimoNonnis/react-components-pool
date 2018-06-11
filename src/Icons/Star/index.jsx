import React from 'react';
import PropTypes from 'prop-types';

/**
 * Star Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Star({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Star Icon</title>
      <polygon
        className={classNamePath}
        fill={fill}
        points="100 38.76 62.29 38.11 50 2.45 37.7 38.11 0 38.76 30.11 61.48 19.1 97.54 50 75.94 80.89 97.55 69.88 61.48 100 38.76"
      />
    </svg>
  );
}

Star.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Star.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'starIcon',
  classNamePath: 'starIconPath',
};

export default Star;
