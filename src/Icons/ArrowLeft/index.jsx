import React from 'react';
import PropTypes from 'prop-types';

/**
 * ArrowLeft Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function ArrowLeft({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className={className}
    >
      <title>ArrowLeft Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M14.52,18.48a.5.5,0,0,0,.33-.88L6.23,10,14.85,2.4a.5.5,0,1,0-.66-.75l-9,8a.5.5,0,0,0,0,.75l9,8A.5.5,0,0,0,14.52,18.48Z"
      />
    </svg>
  );
}

ArrowLeft.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

ArrowLeft.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'arrowLeftIcon',
  classNamePath: 'arrowLeftIconPath',
};

export default ArrowLeft;
