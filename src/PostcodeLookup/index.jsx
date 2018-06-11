import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import yup from 'yup';

import PostcodeInput from './PostcodeInput';
import AddressList from './AddressList';
import EnterManualForm from './EnterManualForm';

import Button from '../Buttons/Button';

// Waiting on a response from this https://github.com/jquense/yup/issues/193
// So can we leave in!
// const schema = yup.object().shape(
//   {
//     sub_building: yup.string(),
//     building_name: yup.string().when('building_number', {
//       is: building_number => !building_number,
//       then: yup.string().required(),
//     }),
//     building_number: yup.string().when('building_name', {
//       is: building_name => !building_name,
//       then: yup.string().required(),
//     }),
//     street: yup.string().required(),
//     town: yup.string().required(),
//     county: yup.string().required(),
//   },
//   ['sub_building', 'building_name', 'building_number', 'street', 'town', 'county']
// );
const schema = yup.object().shape({
  sub_building: yup.string().nullable(),
  building_name: yup.string().nullable(),
  building_number: yup.string().nullable(),
  street: yup.string().required('Please enter a street'),
  town: yup.string().required('Please enter a town/city'),
  county: yup.string().required('Please enter a county'),
  postcode: yup.string().required('Please enter a postcode'),
});

const formatYupErrors = yupError => {
  const errors = {};

  for (const err of yupError.inner) { // eslint-disable-line
    if (!errors[err.path]) {
      errors[err.path] = err.message;
    }
  }
  return errors;
};

const isMissingFields = address =>
  address.postcode === '' || address.county === '' || address.town === '' || address.street === '';

export default class PostcodeLookup extends Component {
  static propTypes = {
    /** Address object, needs empty object. */
    address: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sub_building: PropTypes.string,
      building_name: PropTypes.string,
      building_number: PropTypes.string,
      street: PropTypes.string,
      town: PropTypes.string,
      county: PropTypes.string,
      postcode: PropTypes.string,
    }).isRequired,
    /** Array of addresses receieved from PCA predict */
    addressList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        street: PropTypes.string,
        place: PropTypes.string,
      })
    ),
    /** Function fired when someone clicks "Find" returns value in postcode input */
    onSearch: PropTypes.func.isRequired,
    /** Function fired when someone selects address from dropdown, returns ID of that address */
    onAddressSelect: PropTypes.func.isRequired,
    /** Function fired when clicking confirm on enter manually address, it returns an object address */
    onConfirm: PropTypes.func.isRequired,
    /** Bool to make the component read only */
    readOnly: PropTypes.bool,
  };

  static defaultProps = {
    readOnly: false,
    addressList: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      isEnterManuallyOpen: false,
      readOnly: props.readOnly,
      address: props.address,
      manualAddress: {
        sub_building: '',
        building_number: '',
        building_name: '',
        street: '',
        town: '',
        county: '',
        postcode: props.address.postcode || '',
      },
      selectedAddressId: '',
      addressList: props.addressList,
      formErrors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const { address, addressList } = this.state;

    if (nextProps.address !== address || nextProps.addressList !== addressList) {
      this.setState({
        address: nextProps.address,
        addressList: nextProps.addressList,
      });
      this.validateForm(nextProps.address);
    }
  }

  transformAddressData = () => {
    let addressArray;

    const { address, selectedAddressId, addressList } = this.state;
    const hasAddress =
      selectedAddressId ||
      (!isEmpty(address.street) || !isEmpty(address.town) || !isEmpty(address.county));

    if (!addressList || hasAddress) {
      let buildingInfo = '';

      const { id, sub_building, building_name, building_number, street, town, county } = address;

      if (building_number || building_name) {
        buildingInfo = building_number ? `${building_number}` : `${building_name}`;
      }

      if (sub_building) {
        buildingInfo = `${sub_building}, ${buildingInfo}`;
      }

      addressArray = [
        {
          name: `${buildingInfo}, ${street}, ${town}, ${county}`,
          value: id,
        },
      ];
    } else {
      addressArray = addressList.map(item => ({
        name: `${item.street}, ${address.postcode}`,
        value: item.id,
      }));
    }

    return addressArray;
  };

  validateForm = address => {
    schema
      .validate(address, { abortEarly: false })
      .then(() => {
        this.setState({
          formErrors: {},
        });
      })
      .catch(error => {
        this.setState({
          formErrors: formatYupErrors(error),
        });
      });
  };

  handleOnBlur = ({ target }) => {
    const { address } = this.state;
    const { value, name } = target;

    address[name] = value;

    this.validateForm(address);
  };

  handleOnBlurManually = ({ target }) => {
    const { manualAddress } = this.state;
    const { value, name } = target;

    manualAddress[name] = value;

    this.validateForm(manualAddress);
  };

  handleOnChange = ({ target }) => {
    const { address, manualAddress } = this.state;
    const { value, name } = target;

    address[name] = value;
    manualAddress[name] = value;

    this.setState({
      address,
      manualAddress,
    });
  };

  handleOnChangeManually = ({ target }) => {
    const { manualAddress } = this.state;
    const { value, name } = target;

    manualAddress[name] = value;

    this.setState({
      manualAddress,
    });
  };

  handleSearch = () => {
    const { onSearch, address: { postcode } } = this.props;

    this.setState({
      selectedAddressId: '',
      addressList: [],
    });

    onSearch(postcode);
  };

  handleAddressSelect = ({ target }) => {
    const { value } = target;
    const { onAddressSelect } = this.props;

    this.setState({
      selectedAddressId: value,
    });

    onAddressSelect(value);
  };

  handleConfirm = () => {
    const { onConfirm } = this.props;
    const { manualAddress } = this.state;

    onConfirm(manualAddress);
  };

  handleEnterManuallyToggle = e => {
    e.preventDefault();

    this.setState({ isEnterManuallyOpen: !this.state.isEnterManuallyOpen, formErrors: {} });
  };

  render() {
    const {
      readOnly,
      address,
      manualAddress,
      selectedAddressId,
      isEnterManuallyOpen,
      addressList,
      formErrors,
    } = this.state;

    const transformedAddress = addressList ? this.transformAddressData() : {};
    const hasAddress =
      selectedAddressId ||
      (!isEmpty(address.street) || !isEmpty(address.town) || !isEmpty(address.county));

    const shouldShowSelect = hasAddress || !isEmpty(addressList);
    const selectedId = selectedAddressId || address.id;

    return (
      <div>
        {isEnterManuallyOpen ? (
          <EnterManualForm
            address={manualAddress}
            errors={formErrors}
            onBlur={this.handleOnBlurManually}
            onChange={this.handleOnChangeManually}
            onConfirm={this.handleConfirm}
            disabled={isMissingFields(manualAddress)}
          />
        ) : (
          <div>
            <PostcodeInput
              readOnly={readOnly}
              value={address.postcode}
              onSearch={this.handleSearch}
              errors={formErrors}
              onBlur={this.handleOnBlur}
              onChange={this.handleOnChange}
              disabled={address.postcode === ''}
            />
            {shouldShowSelect && (
              <AddressList
                readOnly={readOnly}
                addressList={transformedAddress}
                id="address"
                selectedId={selectedId}
                onChange={this.handleAddressSelect}
              />
            )}
          </div>
        )}

        {readOnly || (
          <Button type="link" onClick={this.handleEnterManuallyToggle}>
            {isEnterManuallyOpen ? 'Back to find address' : 'Enter this address manually'}
          </Button>
        )}
      </div>
    );
  }
}
