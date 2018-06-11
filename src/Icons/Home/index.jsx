import React from 'react';
import PropTypes from 'prop-types';

/**
 * Home Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Home({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <title>Home Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M98.26,42.6a2.87,2.87,0,0,0-1.15-1.89L51.71,7.46a2.88,2.88,0,0,0-3.41,0L2.89,40.71A2.89,2.89,0,1,0,6.3,45.37l43.7-32,43.7,32a2.87,2.87,0,0,0,1.7.56,2.9,2.9,0,0,0,2.33-1.18A2.87,2.87,0,0,0,98.26,42.6Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M84.84,45.21A2.89,2.89,0,0,0,82,48.1V87.32H62.84V66.09a12.85,12.85,0,0,0-25.69,0V87.32H18V48.1a2.89,2.89,0,0,0-5.78,0V90.21a2.89,2.89,0,0,0,2.89,2.89H40a2.9,2.9,0,0,0,2.88-2.65,2.26,2.26,0,0,0,0-.24V66.09a7.07,7.07,0,1,1,14.14,0V90.21a2.1,2.1,0,0,0,0,.22A2.9,2.9,0,0,0,60,93.1H84.84a2.89,2.89,0,0,0,2.89-2.89V48.1A2.89,2.89,0,0,0,84.84,45.21Z"
      />
    </svg>
  );
}

Home.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Home.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'homeIcon',
  classNamePath: 'homeIconPath',
};

export default Home;
