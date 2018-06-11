import React from 'react';
import PropTypes from 'prop-types';

/**
 * HouseSimpleLogoSmall Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function HouseSimpleLogoSmall({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78.1 139"
      width={width}
      height={height}
      className={className}
    >
      <title>HouseSimpleLogoSmall Small Icon</title>
      <path
        fill={fill}
        className={classNamePath}
        d="M3.6,80.6H0v56.3A27.3,27.3,0,0,0,9.4,139a33,33,0,0,0,10-2.1V89.8C19.4,89.2,13.6,80.6,3.6,80.6Z"
      />
      <path
        fill={fill}
        className={classNamePath}
        d="M74.4,67.3,23.6,43a8.09,8.09,0,0,1-3.2-2.7,10.71,10.71,0,0,1-1-4.5V11.9C16.2,1.7,2.6.1,2.6.1.9.1,0,0,0,0V47.7c0,2,.2,3.4,1.1,4.6a12.87,12.87,0,0,0,3,2.4L53.4,77.9s3.3,1.5,4.4,3.4.9,5.1.9,5.1v50.5a23.89,23.89,0,0,0,9,2.1c4.6,0,10.4-2.1,10.4-2.1V73.1A6.29,6.29,0,0,0,74.4,67.3Z"
      />
    </svg>
  );
}

HouseSimpleLogoSmall.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

HouseSimpleLogoSmall.defaultProps = {
  width: 20,
  height: 36,
  fill: '#1E2938',
  className: 'HouseSimpleLogoSmallSmall',
  classNamePath: 'HouseSimpleLogoSmallSmallPath',
};

export default HouseSimpleLogoSmall;
