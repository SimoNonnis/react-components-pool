import React from 'react';
import PropTypes from 'prop-types';

/**
 * ArrowRight Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function ArrowRight({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className={className}
    >
      <title>ArrowRight Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M5.48,18.48a.5.5,0,0,1-.33-.88L13.77,10,5.15,2.4a.5.5,0,1,1,.66-.75l9,8a.5.5,0,0,1,0,.75l-9,8A.5.5,0,0,1,5.48,18.48Z"
      />
    </svg>
  );
}

ArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

ArrowRight.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'arrowRightIcon',
  classNamePath: 'arrowRightIconPath',
};

export default ArrowRight;
