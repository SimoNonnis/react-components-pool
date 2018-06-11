import React from 'react';
import PropTypes from 'prop-types';

function Pound({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width={width}
      height={height}
      className={className}
    >
      <title>Pound Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M18.11,21.6l-11.64,0a1.12,1.12,0,0,1-1-1.11,1.11,1.11,0,0,1,1-1.11H8.25V13.87H6.44a1.13,1.13,0,0,1-1-1.11,1.11,1.11,0,0,1,1-1.11l1.84,0v-4A4.72,4.72,0,0,1,9.86,4.07a5.68,5.68,0,0,1,3.83-1.43h.07l.56,0a5.66,5.66,0,0,1,3.74,1.91A1.12,1.12,0,0,1,18,6.09l0,0a1.1,1.1,0,0,1-.82.27A1.12,1.12,0,0,1,16.36,6,3.41,3.41,0,0,0,14.1,4.88l-.38,0a3,3,0,0,0-3.25,2.76v4h4.7a1.12,1.12,0,0,1,1,1.11,1.11,1.11,0,0,1-1,1.11H10.47l0,5.49,7.59,0a1.13,1.13,0,0,1,1,1.11A1.11,1.11,0,0,1,18.11,21.6Z"
      />
    </svg>
  );
}

Pound.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Pound.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'poundIcon',
  classNamePath: 'poundIconPath',
};

export default Pound;
