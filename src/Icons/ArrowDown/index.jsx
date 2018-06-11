import React from 'react';
import PropTypes from 'prop-types';

/**
 * ArrowDown Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function ArrowDown({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240.835 240.835"
      width={width}
      height={height}
      className={className}
    >
      <title>ArrowDown Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0 c-4.74,4.752-4.74 12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859 c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"
      />
    </svg>
  );
}

ArrowDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

ArrowDown.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'arrowDownIcon',
  classNamePath: 'arrowDownIconPath',
};

export default ArrowDown;
