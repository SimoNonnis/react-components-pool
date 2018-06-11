import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { Row, Column } from '../../GridSystem';
import { Input } from '../../FormElements';

import { ConfirmButton } from './style';

const propTypes = {
  /** Address object */
  address: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sub_building: PropTypes.string,
    building_name: PropTypes.string,
    building_number: PropTypes.string,
    street: PropTypes.string,
    town: PropTypes.string,
    county: PropTypes.string,
    postcode: PropTypes.string,
  }),
  /** Function fired input is blurred */
  onBlur: PropTypes.func,
  /** Function fired when inputs are changed */
  onChange: PropTypes.func.isRequired,
  /** Function fired when clicking confirm is clicked */
  onConfirm: PropTypes.func.isRequired,
  /** Error object, needs key of input name to show error on input */
  errors: PropTypes.shape({}),
  /** Bool to make find button disabled */
  disabled: PropTypes.bool,
};

const defaultProps = {
  address: {
    sub_building: '',
    building_name: '',
    building_number: '',
    street: '',
    town: '',
    county: '',
    postcode: '',
  },
  onBlur: noop,
  errors: {},
  disabled: true,
};

function EnterManualForm({ address, onBlur, onChange, onConfirm, errors, disabled }) {
  return (
    <Row mt={1}>
      <Column width={2 / 4} mb={1}>
        <Input
          value={address.sub_building}
          name="sub_building"
          id="sub_building"
          onChange={onChange}
          label="Flat/unit No."
          error={errors.sub_building}
          onBlur={onBlur}
        />
      </Column>
      <Column width={2 / 4} mb={1}>
        <Input
          value={address.building_number}
          name="building_number"
          id="building_number"
          onChange={onChange}
          label="Building No."
          error={errors.building_number}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <Input
          value={address.building_name}
          name="building_name"
          id="building_name"
          onChange={onChange}
          label="Building name"
          error={errors.building_name}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <Input
          value={address.street}
          name="street"
          id="street"
          onChange={onChange}
          label="Street"
          error={errors.street}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <Input
          value={address.town}
          name="town"
          id="town"
          onChange={onChange}
          label="Town/City"
          error={errors.town}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <Input
          value={address.county}
          name="county"
          id="county"
          onChange={onChange}
          label="County"
          error={errors.county}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <Input
          value={address.postcode}
          name="postcode"
          id="postcode"
          onChange={onChange}
          label="Postcode"
          error={errors.postcode}
          onBlur={onBlur}
        />
      </Column>
      <Column width={[4 / 4, 12 / 12, 6 / 12]} mb={1}>
        <ConfirmButton onClick={onConfirm} disabled={disabled} fullWidth type="button">
          Confirm
        </ConfirmButton>
      </Column>
    </Row>
  );
}

EnterManualForm.propTypes = propTypes;
EnterManualForm.defaultProps = defaultProps;

export default EnterManualForm;
