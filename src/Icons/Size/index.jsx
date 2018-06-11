import React from 'react';
import PropTypes from 'prop-types';

/**
 * Size Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Size({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Size Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M96.52,31.79,68.21,3.48a2.18,2.18,0,0,0-1.57-.65,2.22,2.22,0,0,0-1.57.65L54.59,14l0,0,0,0L44.45,24.09l0,0,0,0L34.32,34.23l0,0,0,0L24.17,44.37l0,0,0,0-10,10,0,0,0,0L3.48,65.07a2.22,2.22,0,0,0,0,3.14L31.79,96.52a2.23,2.23,0,0,0,1.56.65h0a2.22,2.22,0,0,0,1.57-.65L96.52,34.93a2.22,2.22,0,0,0,0-3.14ZM20.93,64.61a2.22,2.22,0,1,0,3.14-3.14l-5.35-5.35,7-7,9.8,9.8a2.22,2.22,0,1,0,3.14-3.14L28.84,46l7-7,5.36,5.36a2.22,2.22,0,0,0,3.14-3.14L39,35.84l7-7,9.8,9.8a2.22,2.22,0,1,0,3.14-3.14l-9.8-9.8,7-7,5.36,5.36a2.22,2.22,0,1,0,3.14-3.14l-5.36-5.36,7.38-7.38L91.81,33.36,33.36,91.81,8.19,66.64l7.38-7.38Z"
      />
    </svg>
  );
}

Size.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Size.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'sizeIcon',
  classNamePath: 'sizeIconPath',
};

export default Size;
