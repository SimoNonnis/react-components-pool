import React from 'react';
import PropTypes from 'prop-types';

/**
 * Calendar Icon.
 * @param {number} width
 * @param {number} height
 * @param {string} fill
 * @param {string} fill
 * @param {string} middlefill
 * @param {string} classNamePath
 * @returns {React.Component}
 */
function Calendar({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={width}
      height={height}
      className={className}
    >
      <title>Calendar Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M12.82,1.65a.47.47,0,0,0-.46.47v.46H9.69V2.12a.46.46,0,1,0-.91,0v.46H6.22V2.12a.46.46,0,1,0-.92,0v.46H2.19a.47.47,0,0,0-.46.47V13.63a.47.47,0,0,0,.46.47H5a4.33,4.33,0,0,0,8.47,0h2.81a.46.46,0,0,0,.45-.47V3.05a.46.46,0,0,0-.45-.47h-3V2.12a.47.47,0,0,0-.46-.47Zm0,2.76a.47.47,0,0,0,.46-.47V3.52h2.54V5.43H2.65V3.52H5.3v.42a.46.46,0,1,0,.92,0V3.52H8.78v.42a.46.46,0,1,0,.91,0V3.52h2.67v.42a.47.47,0,0,0,.46.47ZM2.65,13.16V6.37H15.82v6.79H13.58v-.08A4.41,4.41,0,0,0,9.23,8.63a4.41,4.41,0,0,0-4.35,4.45s0,.06,0,.08ZM9.23,16.6a3.52,3.52,0,1,1,3.44-3.52A3.48,3.48,0,0,1,9.23,16.6Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M9.61,13.17V10.94a.43.43,0,0,0-.41-.46.44.44,0,0,0-.41.46v2.43a.5.5,0,0,0,.12.32l.95,1.06a.38.38,0,0,0,.29.14.4.4,0,0,0,.29-.14.5.5,0,0,0,0-.65Z"
      />
    </svg>
  );
}

Calendar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Calendar.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  middlefill: 'currentColor',
  className: 'chainIcon',
  classNamePath: 'chainIconPath',
};

export default Calendar;
