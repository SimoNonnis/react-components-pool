import React from 'react';
import PropTypes from 'prop-types';

/**
 * Attention Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Attention({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.44 16.56"
      width={width}
      height={height}
      className={className}
    >
      <title>Attention Icon</title>
      <circle className={classNamePath} fill={fill} />
      <path
        className={classNamePath}
        fill={fill}
        d="M8.31,16.13a7.91,7.91,0,1,1,7.91-7.91A7.92,7.92,0,0,1,8.31,16.13Zm0-14.82a6.91,6.91,0,1,0,6.91,6.91A6.92,6.92,0,0,0,8.31,1.31Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M7.56,8.75,7.34,5.48q-.06-1-.06-1.37a1.25,1.25,0,0,1,.3-.89,1,1,0,0,1,.78-.32.79.79,0,0,1,.79.41,2.75,2.75,0,0,1,.2,1.17,9,9,0,0,1,0,.92L9,8.77a2.64,2.64,0,0,1-.21.92.54.54,0,0,1-.52.32.52.52,0,0,1-.51-.31A3.1,3.1,0,0,1,7.56,8.75Zm.76,4.5A1.08,1.08,0,0,1,7.59,13a1,1,0,0,1-.31-.76,1,1,0,0,1,1-1,1,1,0,0,1,.73.3,1,1,0,0,1,.3.72A1,1,0,0,1,9,13,1,1,0,0,1,8.32,13.25Z"
      />
    </svg>
  );
}

Attention.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Attention.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'AttentionIcon',
  classNamePath: 'AttentionIconPath',
};

export default Attention;
