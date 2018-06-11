import React from 'react';
import PropTypes from 'prop-types';

/**
 * Email Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Email({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.94 12.44"
      width={width}
      height={height}
      className={className}
    >
      <title>Email Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M13.58.93H3A1.71,1.71,0,0,0,1.3,2.64V9.86A1.71,1.71,0,0,0,3,11.57H13.58a1.71,1.71,0,0,0,1.71-1.71V2.64A1.71,1.71,0,0,0,13.58.93m0,9.86H3a.93.93,0,0,1-.93-.93V2.64A.93.93,0,0,1,3,1.71H13.58a.93.93,0,0,1,.93.93V9.86h0a.93.93,0,0,1-.93.93"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M10.12,6.16l3.42-3.07A.39.39,0,1,0,13,2.51L8.3,6.74l-.92-.82h0l-.06-.05L3.57,2.51A.39.39,0,1,0,3,3.09L6.51,6.19,3.06,9.41A.39.39,0,0,0,3,10a.4.4,0,0,0,.29.12A.39.39,0,0,0,3.6,10L7.1,6.71,8,7.56a.39.39,0,0,0,.52,0l1-.87L13,10a.39.39,0,0,0,.55,0,.39.39,0,0,0,0-.55Z"
      />
    </svg>
  );
}

Email.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Email.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'emailIcon',
  classNamePath: 'emailIconPath',
};

export default Email;
