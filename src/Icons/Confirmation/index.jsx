import React from 'react';
import PropTypes from 'prop-types';

function Confirmation({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 272 272"
      width={width}
      height={height}
      className={className}
    >
      <title>Confirmation Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M136,0A136,136,0,1,0,272,136,136,136,0,0,0,136,0ZM122.46,211,46,134.54l25.46-25.46L120.38,158l80.36-94.06,27.37,23.38Z"
      />
    </svg>
  );
}

Confirmation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Confirmation.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'sizeIcon',
  classNamePath: 'sizeIconPath',
};

export default Confirmation;
