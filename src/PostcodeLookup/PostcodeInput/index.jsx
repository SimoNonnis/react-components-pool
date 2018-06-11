import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { Input } from '../../FormElements';

import { SearchButton, Icon } from './style';

const propTypes = {
  /** Function fired when input is changed */
  onChange: PropTypes.func.isRequired,
  /** Function fired when input is blurred */
  onBlur: PropTypes.func,
  /** Function fired when "Find" button is clicked */
  onSearch: PropTypes.func.isRequired,
  /** Value of input, controlled input */
  value: PropTypes.string.isRequired,
  /** Errors object, will need to have postcode key for error to show. */
  errors: PropTypes.shape({}),
  /** Bool to make the component read only */
  readOnly: PropTypes.bool,
  /** Bool to make find button disabled */
  disabled: PropTypes.bool,
};

const defaultProps = {
  onBlur: null,
  errors: {},
  readOnly: false,
  disabled: true,
};

function PostcodeInput({ readOnly, onChange, onSearch, value, onBlur, errors, disabled }) {
  return (
    <Flex mx={-1}>
      <Box mx={1} width={[2 / 4, 6 / 12, 8 / 12]}>
        <Input
          id="postcode"
          name="postcode"
          onChange={onChange}
          label="Enter postcode"
          value={value}
          onBlur={onBlur}
          error={errors.postcode}
          disabled={readOnly}
        />
      </Box>
      <Box mx={1} width={[2 / 4, 6 / 12, 4 / 12]}>
        <SearchButton onClick={onSearch} fullWidth disabled={readOnly || disabled} type="button">
          <Icon fill="#ffffff" width={15} height={15} />
          Find
        </SearchButton>
      </Box>
    </Flex>
  );
}

PostcodeInput.propTypes = propTypes;
PostcodeInput.defaultProps = defaultProps;

export default PostcodeInput;
