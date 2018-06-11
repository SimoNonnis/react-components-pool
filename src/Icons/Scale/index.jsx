import React from 'react';
import PropTypes from 'prop-types';

/**
 * Scale Icon component.
 */
function ScaleIcon({ width, height, fill, className, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 47"
      width={width}
      height={height}
      className={className}
    >
      <title>Scale Icon</title>
      <g transform="translate(-601.000000, -584.000000)" stroke={stroke}>
        <g transform="translate(460.000000, 230.000000)">
          <g transform="translate(88.000000, 312.000000)">
            <g transform="translate(54.132550, 43.000000)">
              <path
                fill={fill}
                d="M36.4602897,21.0501767 C36.4602897,25.595662 40.1116722,29.280506 44.6158808,29.280506 C49.1200894,29.280506 52.7714719,25.595662 52.7714719,21.0501767 L36.4602897,21.0501767 Z"
                strokeWidth="2"
              />
              <polyline
                fill={fill}
                strokeWidth="2"
                opacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="38.3153415 20.0450863 44.6158808 3.62301716 50.8379703 19.8436147"
              />
              <path
                fill={fill}
                d="M0,21.0501767 C0,25.595662 3.65138251,29.280506 8.15559111,29.280506 C12.6597997,29.280506 16.3111822,25.595662 16.3111822,21.0501767 L0,21.0501767 Z"
                strokeWidth="2"
              />
              <polyline
                fill={fill}
                strokeWidth="2"
                opacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="1.85505185 20.0450863 8.15559111 3.62301716 14.3776806 19.8436147"
              />
              <path
                d="M5.75688784,0.992559524 L47.9740654,0.992559524"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M25.9059953,0.951902784 L25.9059953,41.0677367"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                fill={fill}
                strokeWidth="1.5"
                transform="translate(26.276704, 43.184507) rotate(-90.000000) translate(-26.276704, -43.184507) "
                x="24.6280007"
                y="33.2045962"
                width="3.29740654"
                height="19.9598214"
                rx="1.64870327"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

ScaleIcon.propTypes = {
  /** Width of the icon */
  width: PropTypes.number,
  /** Height of the icon */
  height: PropTypes.number,
  /** Inner colour of the icon */
  fill: PropTypes.string,
  /** Class name of the icon */
  className: PropTypes.string,
  /** Stroke colour of the icon */
  stroke: PropTypes.string,
};

ScaleIcon.defaultProps = {
  width: 40,
  height: 40,
  fill: 'transparent',
  className: 'scaleIcon',
  stroke: '#1D3141',
};

export default ScaleIcon;
