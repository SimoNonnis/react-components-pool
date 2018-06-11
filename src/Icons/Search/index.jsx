import React from 'react';
import PropTypes from 'prop-types';

/**
 * SearchIcon component.
 */
function SearchIcon({ className, width, height, fill }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620.692 620.692"
      width={width}
      height={height}
    >
      <title>Search Icon</title>

      <path
        fill={fill}
        d="M605.232 555.851L479.167 429.786c35.489-45.192 56.852-102.025 56.852-163.947C536.019 119.02 416.999 0 270.18 0 123.36 0 4.34 119.02 4.34 265.839c0 146.819 119.02 265.839 265.839 265.839 57.478 0 110.532-18.419 154.016-49.428l127.317 127.318c14.83 14.83 38.87 14.83 53.7 0 14.85-14.829 14.85-38.887.02-53.717zM417.778 399.557c-5.07 1.842-9.894 4.538-13.957 8.62-3.74 3.741-6.513 8.07-8.374 12.685-34.236 27.704-77.796 44.357-125.267 44.357-110.115 0-199.379-89.265-199.379-199.379S160.065 66.46 270.18 66.46s199.379 89.265 199.379 199.379c0 51.516-19.71 98.323-51.781 133.718z"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  /** Classname of the icon */
  className: PropTypes.string,
  /** Width of the icon */
  width: PropTypes.number,
  /** Height of the icon */
  height: PropTypes.number,
  /** colour of the icon */
  fill: PropTypes.string,
};

SearchIcon.defaultProps = {
  className: '',
  width: 40,
  height: 40,
  fill: 'currentColor',
};

export default SearchIcon;
