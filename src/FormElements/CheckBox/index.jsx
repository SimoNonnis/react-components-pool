import React from 'react';
import PropTypes from 'prop-types';

import { Container, Check, Label } from './style';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]).isRequired,
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

const CheckBox = ({ className, id, name, label, error, checked, disabled, ...props }) => {
  const labelComp = typeof label === 'function' ? label() : label;
  return (
    <Container className={className}>
      <Check disabled={disabled} type="checkbox" id={id} name={name} checked={checked} {...props} />
      <Label disabled={disabled} htmlFor={id} error={!!error}>
        {labelComp}
      </Label>
    </Container>
  );
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
