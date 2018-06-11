import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import InputFeedback from '../InputFeedback';

import { InputStyled } from '../_common/style';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  error: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'date', 'tel', 'password']),
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  className: null,
  label: null,
  error: null,
  type: 'text',
  autoFocus: false,
  required: false,
  disabled: false,
};

const Input = ({ className, id, label, error, type, autoFocus, required, disabled, ...props }) => {
  const labelComponent = typeof label === 'function' ? label() : label;

  return (
    <div className={className}>
      <Label htmlFor={id} disabled={disabled} error={!!error} required={required}>
        {labelComponent}
      </Label>
      <InputStyled
        id={id}
        type={type}
        error={!!error}
        autoComplete="nope"
        {...type === 'date' && { pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}' }}
        autoFocus={autoFocus}
        disabled={disabled}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
