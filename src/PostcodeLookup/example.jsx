import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostcodeLookup from './';

const mockAddress = {
  id: '52509479',
  sub_building: '',
  building_name: '',
  building_number: '68',
  street: 'Basin Road',
  town: 'Worcester',
  county: 'Worcestershire',
  postcode: 'WR5 3DA',
};

export default class ExamplePostcodeLookup extends Component {
  static propTypes = {
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
    readOnly: PropTypes.bool,
  };
  static defaultProps = {
    address: {
      id: '',
      sub_building: '',
      building_name: '',
      building_number: '',
      street: '',
      town: '',
      county: '',
      postcode: '',
    },
    readOnly: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      addressList: [],
      address: props.address,
    };
  }

  handleAddressSelect = () => {
    this.setState({
      address: mockAddress,
    });
  };

  handleSearch = postcode => {
    this.setState({
      address: {
        id: '',
        sub_building: '',
        building_name: '',
        building_number: '',
        street: '',
        town: '',
        county: '',
        postcode,
      },
      addressList: [
        {
          id: '52509479',
          street: 'P C A Predict',
          place: 'Waterside Basin Road Worcester',
        },
        {
          id: '53327590',
          street: 'Lock Keepers Cottage Basin Road',
          place: 'Worcester',
        },
        {
          id: '26772356.00',
          street: 'Lock View Basin Road',
          place: 'Worcester',
        },
        {
          id: '72509479',
          street: 'P C A Predict',
          place: 'Waterside Basin Road Worcester',
        },
        {
          id: '73327590.00',
          street: 'Lock Keepers Cottage Basin Road',
          place: 'Worcester',
        },
        {
          id: '76772356.00',
          street: 'Lock View Basin Road',
          place: 'Worcester',
        },
        {
          id: '92509479.00',
          street: 'P C A Predict',
          place: 'Waterside Basin Road Worcester',
        },
        {
          id: '93327590.00',
          street: 'Lock Keepers Cottage Basin Road',
          place: 'Worcester',
        },
        {
          id: '96772356.00',
          street: 'Lock View Basin Road',
          place: 'Worcester',
        },
      ],
    });
  };

  handleOnConfirm = manualAddress => {
    console.log({ manualAddress });
  };

  render() {
    const { addressList, address } = this.state;
    const { readOnly } = this.props;
    return (
      <div>
        <PostcodeLookup
          address={address}
          addressList={addressList}
          onSearch={this.handleSearch}
          onAddressSelect={this.handleAddressSelect}
          onConfirm={this.handleOnConfirm}
          readOnly={readOnly}
        />
      </div>
    );
  }
}
