import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, Asterisk } from './style';

const propTypes = {
  error: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  htmlFor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};
const defaultProps = {
  error: false,
  className: null,
  children: null,
  disabled: false,
  required: false,
};

const Label = ({ disabled, error, className, children, htmlFor, required }) => {
  if (!children) return null;

  const asterisk = disabled || (required && <Asterisk>*</Asterisk>);

  return (
    <LabelStyled htmlFor={htmlFor} disabled={disabled} error={error} className={className}>
      {children}
      {asterisk}
    </LabelStyled>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
