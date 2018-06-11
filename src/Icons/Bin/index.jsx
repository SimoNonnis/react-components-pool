import React from 'react';
import PropTypes from 'prop-types';

function Bin({ width, height, fill, className, classNamePath }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
    >
      <title>Bin Icon</title>

      <path
        className={classNamePath}
        fill={fill}
        d="M436,60H346V45A45.05,45.05,0,0,0,301,0H211a45.05,45.05,0,0,0-45,45V60H76a45.05,45.05,0,0,0-45,45v30a15,15,0,0,0,15,15H62.18L88.57,471s0,.08,0,.12A44.78,44.78,0,0,0,133.4,512H378.6a44.78,44.78,0,0,0,44.82-40.93s0-.08,0-.12L449.82,150H466a15,15,0,0,0,15-15V105A45.05,45.05,0,0,0,436,60ZM196,45a15,15,0,0,1,15-15h90a15,15,0,0,1,15,15V60H196ZM393.54,468.41A14.93,14.93,0,0,1,378.6,482H133.4a14.93,14.93,0,0,1-14.94-13.59L92.28,150H419.72ZM451,120H61V105A15,15,0,0,1,76,90H436a15,15,0,0,1,15,15Z"
      />

      <path
        className={classNamePath}
        fill={fill}
        d="M256,180a15,15,0,0,0-15,15V407a15,15,0,0,0,30,0V195A15,15,0,0,0,256,180Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M346,180a15,15,0,0,0-15,15V407a15,15,0,0,0,30,0V195A15,15,0,0,0,346,180Z"
      />
      <path
        className={classNamePath}
        fill={fill}
        d="M166,180a15,15,0,0,0-15,15V407a15,15,0,0,0,30,0V195A15,15,0,0,0,166,180Z"
      />
    </svg>
  );
}

Bin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  classNamePath: PropTypes.string,
};

Bin.defaultProps = {
  width: 40,
  height: 40,
  fill: 'currentColor',
  className: 'sizeIcon',
  classNamePath: 'sizeIconPath',
};

export default Bin;
