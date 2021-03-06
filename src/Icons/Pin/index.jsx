import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pin Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Pin({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Pin Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M50,24.2A11.16,11.16,0,1,0,61.16,35.35,11.17,11.17,0,0,0,50,24.2Zm6.24,11.16A6.24,6.24,0,1,1,50,29.11,6.25,6.25,0,0,1,56.24,35.35Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M91.52,88.24,76.59,58.87a2.45,2.45,0,0,0-2.19-1.34h-6c5.8-9.68,8.73-17.14,8.73-22.21a27.12,27.12,0,1,0-54.24,0c0,5.08,2.94,12.53,8.73,22.21h-6a2.45,2.45,0,0,0-2.19,1.34L8.48,88.24a2.46,2.46,0,0,0,2.19,3.57H89.33a2.46,2.46,0,0,0,2.19-3.57ZM35.62,63.88C41.76,73.2,48,81,48.09,81.07a2.46,2.46,0,0,0,3.83,0C52,81,58.25,73.18,64.38,63.88l.94-1.44h7.57L85.32,86.89H14.68L27.11,62.44h7.57ZM50,75.56a228.78,228.78,0,0,1-13.79-20c-5.51-9.1-8.42-16.12-8.42-20.29a22.2,22.2,0,1,1,44.41,0c0,4.17-2.91,11.18-8.42,20.29A228.85,228.85,0,0,1,50,75.56Z"
      />
    </svg>
  );
}

Pin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Pin.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'pinIcon',
  classNamePath: 'pinIconPath',
};

export default Pin;
