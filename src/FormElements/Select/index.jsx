import React from 'react';
import PropTypes from 'prop-types';
import InputFeedback from '../InputFeedback';
import Label from '../Label';
import { SelectStyled, SelectWrap } from '../_common/style';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};
const defaultProps = {
  label: null,
  error: null,
  className: null,
  value: '',
  placeHolder: '- Select -',
  name: null,
  required: false,
  disabled: false,
};

const Select = ({
  options,
  id,
  label,
  error,
  className,
  placeHolder,
  name,
  required,
  disabled,
  ...props
}) => {
  const getOptions = options.map(option => (
    <option value={option.value} key={option.value}>
      {option.name}
    </option>
  ));

  return (
    <div className={className}>
      <Label htmlFor={id} disabled={disabled} error={!!error} required={required}>
        {label}
      </Label>
      <SelectWrap disabled={disabled} error={!!error}>
        <SelectStyled disabled={disabled} name={name} id={id} {...props} autoComplete="nope">
          <option disabled value="">
            {placeHolder}
          </option>
          {getOptions}
        </SelectStyled>
      </SelectWrap>
      <InputFeedback error={error} />
    </div>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
