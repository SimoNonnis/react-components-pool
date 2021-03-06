import React from 'react';
import PropTypes from 'prop-types';

/**
 * Solicitor Icon
 * @param {number} width
 * @param {number} height
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Solicitor({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
      className={className}
    >
      <title>Solicitor Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M27.73,14.5,25,7.15A1,1,0,0,0,24.87,7H25a1,1,0,0,0,0-2H5A1,1,0,0,0,5,7h.17a1,1,0,0,0-.08.15L2.31,14.5H1v1a5,5,0,0,0,10,0v-1H9.73L7,7.15A1,1,0,0,0,6.87,7H14V24H11.35a1.25,1.25,0,0,0,0,2.5h7.5a1.25,1.25,0,1,0,0-2.5H16V7h7.17a1,1,0,0,0-.08.15L20.31,14.5H19v1a5,5,0,0,0,10,0v-1ZM6,18.5a3,3,0,0,1-2.83-2H8.83A3,3,0,0,1,6,18.5Zm1.59-4H4.45L6,10.33ZM24,10.33l1.57,4.17H22.45Zm0,8.17a3,3,0,0,1-2.83-2h5.66A3,3,0,0,1,24,18.5Z"
      />
    </svg>
  );
}

Solicitor.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Solicitor.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'solicitorIcon',
  classNamePath: 'solicitorIconPath',
};

export default Solicitor;
