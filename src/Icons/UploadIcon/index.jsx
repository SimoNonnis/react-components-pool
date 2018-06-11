import React from 'react';
import PropTypes from 'prop-types';

function UploadIcon({ width, height, className, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43 40"
      width={width}
      height={height}
      className={className}
    >
      <title>Upload Icon</title>
      <path
        fill={fill}
        d="M34.88,10.45a12.41,12.41,0,0,0-23-4.15,7.1,7.1,0,0,0-1.31-.12A6.83,6.83,0,0,0,3.76,13a7.51,7.51,0,0,0,.14,1.42A9.53,9.53,0,0,0,0,22.1a10.2,10.2,0,0,0,2.57,6.73A9.15,9.15,0,0,0,8.92,32h7.66a1.2,1.2,0,0,0,0-2.39H9C5.42,29.42,2.38,26,2.38,22.09A7.11,7.11,0,0,1,5.88,16a1.21,1.21,0,0,0,.52-1.45A4.37,4.37,0,0,1,6.14,13a4.44,4.44,0,0,1,4.42-4.44,4.33,4.33,0,0,1,1.51.27,1.19,1.19,0,0,0,1.49-.61,10,10,0,0,1,19.08,3.32,1.19,1.19,0,0,0,1,1.06,8.63,8.63,0,0,1-.81,17h-6.5a1.2,1.2,0,0,0,0,2.39h6.63A10.54,10.54,0,0,0,40,28.52a11.06,11.06,0,0,0-5.13-18.07Z"
      />
      <path
        fill={fill}
        d="M28.6,23.23a1.2,1.2,0,0,0,0-1.69L22.29,15.2a1.2,1.2,0,0,0-.84-.35,1.16,1.16,0,0,0-.84.35l-6.31,6.34a1.2,1.2,0,0,0,.84,2,1.16,1.16,0,0,0,.84-.35l4.28-4.3V38.69a1.19,1.19,0,1,0,2.38,0V18.93l4.28,4.3A1.17,1.17,0,0,0,28.6,23.23Z"
      />
    </svg>
  );
}

UploadIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  fill: PropTypes.string,
};

UploadIcon.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'uploadIcon',
};

export default UploadIcon;
