import React from 'react';
import PropTypes from 'prop-types';

function Hamburger({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      className={className}
    >
      <title>Hamburger Icon</title>
      <path
        className={classNamePath}
        fill={fill}
        d="M4,10H28a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Zm24,4H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Zm0,8H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Z"
      />
    </svg>
  );
}

Hamburger.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Hamburger.defaultProps = {
  width: 32,
  height: 32,
  fill: '#fff',
  className: 'Hamburger',
  classNamePath: 'HamburgerPath',
};

export default Hamburger;
