import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import InputFeedback from '../InputFeedback';

import { TextareaStyled } from '../_common/style';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

const defaultProps = {
  className: null,
  name: null,
  label: null,
  error: null,
  rows: 5,
  disabled: false,
  required: false,
};

const Textarea = ({ className, id, label, error, name, rows, disabled, required, ...props }) => (
  <div className={className}>
    <Label htmlFor={id} error={!!error} disabled={disabled} required={required}>
      {label}
    </Label>
    <TextareaStyled
      id={id}
      name={name}
      error={!!error}
      autoComplete="nope"
      rows={rows}
      disabled={disabled}
      {...props}
    />
    <InputFeedback error={error} />
  </div>
);

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
