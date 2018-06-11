import React from 'react';
import PropTypes from 'prop-types';

/**
 * Bulb Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Bulb({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Bulb Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M50,7.43A29.38,29.38,0,0,0,31,59.21a14.5,14.5,0,0,1,3.49,8.3,2.35,2.35,0,0,0,2.33,2.07H63.18a2.34,2.34,0,0,0,2.33-2.07c.29-2.41,1.1-5.79,3.35-8.17A29.38,29.38,0,0,0,50,7.43ZM74.69,36.81a24.82,24.82,0,0,1-9,19.06l-.08.07a18.3,18.3,0,0,0-4.44,8.94H38.81a18.38,18.38,0,0,0-4.28-8.77,2.33,2.33,0,0,0-.34-.35,24.69,24.69,0,1,1,40.51-19Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M63.18,72.55H36.81a2.35,2.35,0,0,0,0,4.7H63.18a2.35,2.35,0,0,0,0-4.7Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M63.18,80.21H36.81a2.35,2.35,0,0,0,0,4.7H63.18a2.35,2.35,0,0,0,0-4.7Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M55.52,87.88h-11a2.35,2.35,0,1,0,0,4.7h11a2.35,2.35,0,1,0,0-4.7Z"
      />
    </svg>
  );
}

Bulb.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Bulb.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'bulbIcon',
  classNamePath: 'bulbIconPath',
};

export default Bulb;
