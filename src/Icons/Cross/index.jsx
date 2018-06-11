import React from 'react';
import PropTypes from 'prop-types';

function Cross({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
    >
      <title>Cross Icon</title>

      <polygon
        className={classNamePath}
        fill={fill}
        points="19.04 6.38 17.62 4.96 12 10.59 6.38 4.96 4.96 6.38 10.59 12 4.96 17.62 6.38 19.04 12 13.41 17.62 19.04 19.04 17.62 13.41 12 19.04 6.38"
      />
    </svg>
  );
}

Cross.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Cross.defaultProps = {
  width: 32,
  height: 32,
  fill: '#fff',
  className: 'chainIcon',
  classNamePath: 'chainIconPath',
};

export default Cross;
