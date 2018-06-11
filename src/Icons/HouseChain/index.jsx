import React from 'react';
import PropTypes from 'prop-types';

/**
 * HouseChain Icon component.
 */
function HouseChain({ width, height, className, fill, primaryStroke, secondaryStroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 185 185"
      width={width}
      height={height}
      className={className}
    >
      <title>HouseChain Icon</title>
      <path
        fill={fill}
        d="M178.150011,58.278557 L148.207884,78.2898233 C147.743619,78.5990039 147.464668,79.1207346 147.464876,79.6794946 L147.464876,122.48137 C147.464876,123.402363 148.209629,124.148975 149.128328,124.148975 L181.664605,124.148975 M4.51459387,58.278557 L34.4567208,78.2898233 C34.9209862,78.5990039 35.1999372,79.1207346 35.1997291,79.6794946 L35.1997291,122.48137 C35.1997291,123.402363 34.4549765,124.148975 33.5362776,124.148975 L1,124.148975"
        stroke={primaryStroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M36.4683738,98.8636364 L144.937212,98.8636364"
        stroke={primaryStroke}
        strokeWidth="4"
        strokeLinecap="square"
        strokeDasharray="2,8,4,1"
      />
      <path
        d="M122.468149,78.2898233 L92.5260217,58.278557 C91.9683137,57.9071477 91.2428433,57.9071477 90.6851354,58.278557 L60.7430085,78.2898233 C60.2787431,78.5990039 59.999792,79.1207346 60.0000001,79.6794946 L60.0000001,122.48137 C60.0000001,123.402363 60.7447527,124.148975 61.6634516,124.148975 L121.547705,124.148975 C122.466404,124.148975 123.211157,123.402363 123.211157,122.48137 L123.211157,79.6794946 C123.211365,79.1207346 122.932414,78.5990039 122.468149,78.2898233 L122.468149,78.2898233 Z"
        stroke={secondaryStroke}
        strokeWidth="5"
        fill={fill}
      />
      <path
        d="M85,82.5953869 C85,86.2379185 87.9454997,89.1907738 91.5789577,89.1907738 C95.2124157,89.1907738 98.1579154,86.2379185 98.1579154,82.5953869 C98.1579154,78.9528553 95.2124157,76 91.5789577,76 C87.9482301,76.0065998 85.0065834,78.9555925 85,82.5953869 L85,82.5953869 Z M95.7655671,82.5953869 C95.7655671,84.9133616 93.8911582,86.7924513 91.5789577,86.7924513 C89.2667571,86.7924513 87.3923482,84.9133616 87.3923482,82.5953869 C87.3923482,80.2774122 89.2667571,78.3983225 91.5789577,78.3983225 C93.8911582,78.3983225 95.7655671,80.2774122 95.7655671,82.5953869 Z"
        stroke={secondaryStroke}
        strokeWidth="0.5"
        fill={secondaryStroke}
        fillRule="nonzero"
      />
      <rect
        fill={fill}
        stroke={secondaryStroke}
        strokeWidth="3.5"
        x="83.75"
        y="99.75"
        width="16.542562"
        height="24.0551948"
        rx="2"
      />
    </svg>
  );
}

HouseChain.propTypes = {
  /** Width of the icon */
  width: PropTypes.number,
  /** Height of the icon */
  height: PropTypes.number,
  /** Inner colour of the icon */
  fill: PropTypes.string,
  /** Class name of the icon */
  className: PropTypes.string,
  /** Main colour of the icon stroke */
  primaryStroke: PropTypes.string,
  /** Secondary colour of the icon stroke */
  secondaryStroke: PropTypes.string,
};

HouseChain.defaultProps = {
  width: 40,
  height: 40,
  fill: '#fff',
  primaryStroke: '#B2B8BD',
  secondaryStroke: '#1D3141',
  className: 'chainIcon',
};

export default HouseChain;
