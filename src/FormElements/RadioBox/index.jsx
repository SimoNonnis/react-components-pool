import React from 'react';
import PropTypes from 'prop-types';

import { Container, Radio, Label } from './style';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};
const defaultProps = {
  className: null,
  checked: false,
  error: null,
  disabled: false,
};

const RadioBox = ({ className, id, name, label, error, checked, disabled, ...props }) => {
  const labelComponent = typeof label === 'function' ? label() : label;

  return (
    <Container className={className}>
      <Radio disabled={disabled} type="radio" id={id} name={name} checked={checked} {...props} />
      <Label disabled={disabled} htmlFor={id} error={!!error}>
        {labelComponent}
      </Label>
    </Container>
  );
};

RadioBox.propTypes = propTypes;
RadioBox.defaultProps = defaultProps;

export default RadioBox;
