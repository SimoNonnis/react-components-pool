import React from 'react';
import PropTypes from 'prop-types';

/**
 * Price Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Price({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Price Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M50,6.5A43.5,43.5,0,1,0,93.5,50,43.55,43.55,0,0,0,50,6.5ZM88,50A38,38,0,1,1,50,12,38,38,0,0,1,88,50Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M62.07,63.47a1.75,1.75,0,0,0-.3.34,8,8,0,0,1-5.39,2.06,9,9,0,0,1-4.13-1.14,10.24,10.24,0,0,0-4.74-1.32,9.86,9.86,0,0,0-3.11.54c2.45-1.74,4.55-4.25,4.55-7.91a8.77,8.77,0,0,0-.36-2.58h7.25a1.62,1.62,0,0,0,0-3.24h-9c-.42-.54-.84-1.14-1.32-1.67C43.8,46.46,42,44.3,42,40.82c0-4.79,4-7.67,8.57-7.67a8.34,8.34,0,0,1,7.6,4.91h0a2.31,2.31,0,0,0,4.38-1,3.42,3.42,0,0,0-.38-1.38C60,31.42,55.54,29,50.09,29c-7.31,0-13.42,5.21-13.42,11.8,0,4.07,2.16,6.59,4.19,9l.42.48H34.93a1.62,1.62,0,0,0,0,3.23h8.69a7.74,7.74,0,0,1,.9,3.59c0,3.59-2.87,6.89-8,9.17h0A2.06,2.06,0,0,0,38.22,70l.12-.06h0c2.51-1.31,5-2.38,7-2.38a10.1,10.1,0,0,1,4.85,1.32,12,12,0,0,0,5.87,1.44,11.78,11.78,0,0,0,7.37-2.2,11.06,11.06,0,0,0,1.6-1.23,2.27,2.27,0,0,0,.28-3.2A2.4,2.4,0,0,0,62.07,63.47Z"
      />
    </svg>
  );
}

Price.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Price.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'priceIcon',
  classNamePath: 'priceIconPath',
};

export default Price;
