import React from 'react';
import PropTypes from 'prop-types';
import { FormSelect } from '../../FormElements';

const propTypes = {
  /** Array of addresses receieved from PCA predict */
  addressList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      street: PropTypes.string,
      place: PropTypes.string,
    })
  ).isRequired,
  /** String value of selected address ID from PCA predict */
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
};

const defaultProps = {
  selectedId: '',
  readOnly: false,
};

function AddressList({ addressList, onChange, selectedId, readOnly }) {
  return (
    <div>
      <FormSelect
        readOnly={readOnly}
        id="address"
        name="address"
        options={addressList}
        onChange={onChange}
        value={selectedId}
        disabled={readOnly}
      />
    </div>
  );
}

AddressList.propTypes = propTypes;
AddressList.defaultProps = defaultProps;

export default AddressList;
