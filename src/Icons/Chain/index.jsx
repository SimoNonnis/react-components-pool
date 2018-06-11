import React from 'react';
import PropTypes from 'prop-types';

/**
 * Chain Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} fill
 * @param {string} middlefill
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Chain({ width, height, fill, middlefill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width={width}
      height={height}
      className={className}
    >
      <title>Chain Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M7,24.41a5,5,0,0,1-3.54-1.46L2.05,21.54a5,5,0,0,1,0-7.07l1.41-1.41a5,5,0,0,1,7.07,0l1.41,1.41a5,5,0,0,1,0,7.07l-1.41,1.41A5,5,0,0,1,7,24.41ZM3.46,15.88a3,3,0,0,0,0,4.24l1.41,1.41a3,3,0,0,0,4.24,0l1.41-1.41a3,3,0,0,0,0-4.24L9.12,14.46a3,3,0,0,0-4.24,0Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M18,13.41a5,5,0,0,1-3.54-1.46l-1.41-1.41a5,5,0,0,1,0-7.07l1.41-1.41a5,5,0,0,1,7.07,0l1.41,1.41a5,5,0,0,1,0,7.07l-1.41,1.41A5,5,0,0,1,18,13.41ZM14.46,4.88a3,3,0,0,0,0,4.24l1.41,1.41a3,3,0,0,0,4.24,0l1.41-1.41a3,3,0,0,0,0-4.24L20.12,3.46a3,3,0,0,0-4.24,0Z"
      />
      <path
        className={classNamePath}
        fill={middlefill}
        d="M11,16a1,1,0,0,1-.71-1.71l4-4a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,11,16Z"
      />
    </svg>
  );
}

Chain.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  middlefill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Chain.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  middlefill: 'currentColor',
  className: 'chainIcon',
  classNamePath: 'chainIconPath',
};

export default Chain;
