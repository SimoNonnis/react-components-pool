import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../_common/Loader';

import { Btn } from '../style';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  rounded: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large', '']),
  styleType: PropTypes.oneOf(['secondary', 'highlight', 'outline', 'white', 'danger', 'link', '']),
  type: PropTypes.oneOf([
    'secondary',
    'highlight',
    'outline',
    'white',
    'danger',
    'link',
    'button',
    'submit',
  ]),
};

const defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: 3,
  size: '',
  styleType: '',
  type: 'submit',
};

function Button({
  children,
  className,
  disabled,
  loading,
  fullWidth,
  onClick,
  rounded,
  size,
  styleType,
  type,
}) {
  const buttonChildren = loading ? <Loader size={size} /> : children;
  return (
    <Btn
      className={className}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      rounded={rounded}
      size={size}
      styleType={styleType}
      type={type}
    >
      {buttonChildren}
    </Btn>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
