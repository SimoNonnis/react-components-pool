import React from 'react';
import PropTypes from 'prop-types';

import { BtnLink } from '../style';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  external: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large', '']),
  to: PropTypes.string.isRequired,
  styleType: PropTypes.oneOf(['secondary', 'highlight', 'outline', 'white', 'danger', 'link', '']),
  type: PropTypes.oneOf([
    'secondary',
    'highlight',
    'outline',
    'white',
    'danger',
    'button',
    'submit',
  ]),
};
const defaultProps = {
  className: '',
  external: false,
  fullWidth: false,
  rounded: 3,
  size: '',
  styleType: '',
  type: 'submit',
};

function ButtonLink({
  children,
  className,
  external,
  fullWidth,
  rounded,
  size,
  to,
  styleType,
  type,
}) {
  return (
    <BtnLink
      className={className}
      external={external}
      fullWidth={fullWidth}
      rounded={rounded}
      size={size}
      styleType={styleType}
      type={type}
      to={to}
    >
      {children}
    </BtnLink>
  );
}

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
