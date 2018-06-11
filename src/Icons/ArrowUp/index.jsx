import React from 'react';
import PropTypes from 'prop-types';

/**
 * ArrowUp Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function ArrowUp({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240.835 240.835"
      width={width}
      height={height}
      className={className}
    >
      <title>ArrowUp Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155 c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155 L129.007,57.819z"
      />
    </svg>
  );
}

ArrowUp.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

ArrowUp.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'arrowUpIcon',
  classNamePath: 'arrowUpIconPath',
};

export default ArrowUp;
