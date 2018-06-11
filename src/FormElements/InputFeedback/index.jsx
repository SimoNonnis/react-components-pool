import React from 'react';
import PropTypes from 'prop-types';
import { ErrorStyled } from './style';

const propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
};
const defaultProps = {
  error: null,
  className: null,
};

const InputFeedback = ({ error, className }) => (
  <ErrorStyled className={className}>{error}</ErrorStyled>
);

InputFeedback.propTypes = propTypes;
InputFeedback.defaultProps = defaultProps;

export default InputFeedback;
