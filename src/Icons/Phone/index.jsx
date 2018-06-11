import React from 'react';
import PropTypes from 'prop-types';

/**
 * Phone Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} className
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Phone({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.6 15.77"
      width={width}
      height={height}
      className={className}
    >
      <title>Phone Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M12.51,9.36a1.46,1.46,0,0,0-1.06-.49,1.51,1.51,0,0,0-1.07.48l-1,1-.24-.13-.31-.17A10.77,10.77,0,0,1,6.26,7.7a6.36,6.36,0,0,1-.85-1.34c.26-.24.5-.48.73-.72l.26-.27a1.44,1.44,0,0,0,0-2.17l-.86-.86-.29-.3c-.19-.19-.39-.4-.59-.58A1.48,1.48,0,0,0,3.61,1a1.54,1.54,0,0,0-1.07.46h0L1.47,2.55A2.29,2.29,0,0,0,.79,4a5.5,5.5,0,0,0,.4,2.33,13.5,13.5,0,0,0,2.4,4,14.76,14.76,0,0,0,4.91,3.85,7.66,7.66,0,0,0,2.76.82h.2a2.36,2.36,0,0,0,1.81-.78v0a7.1,7.1,0,0,1,.55-.57l.41-.4a1.56,1.56,0,0,0,.47-1.09,1.51,1.51,0,0,0-.48-1.08Zm1.12,3.3h0l-.38.38a8.24,8.24,0,0,0-.61.63,1.51,1.51,0,0,1-1.18.5h-.14a6.8,6.8,0,0,1-2.45-.73A13.93,13.93,0,0,1,4.25,9.81,12.73,12.73,0,0,1,2,6a4.48,4.48,0,0,1-.35-2,1.44,1.44,0,0,1,.43-.93L3.14,2.08a.71.71,0,0,1,.48-.22.67.67,0,0,1,.46.22h0c.19.18.37.36.56.56l.3.3.86.86a.6.6,0,0,1,0,1l-.27.27c-.26.27-.51.52-.79.77l0,0a.64.64,0,0,0-.16.71v0a6.87,6.87,0,0,0,1,1.65h0a11.51,11.51,0,0,0,2.78,2.53,4.24,4.24,0,0,0,.39.21l.31.17,0,0a.68.68,0,0,0,.31.08A.67.67,0,0,0,9.9,11L11,10a.71.71,0,0,1,.47-.24.64.64,0,0,1,.45.23l1.73,1.73A.62.62,0,0,1,13.64,12.66Z"
      />
    </svg>
  );
}

Phone.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Phone.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'phoneIcon',
  classNamePath: 'phoneIconPath',
};

export default Phone;
