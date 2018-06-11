/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import Select from './';

const options = [
  {
    name: 'Option 1',
    value: 'option-1',
  },
  {
    name: 'Option 2',
    value: 'option-2',
  },
  {
    name: 'Option 3',
    value: 'option-3',
  },
  {
    name: 'Option 4',
    value: 'option-4',
  },
];

describe('Test <Select />', () => {
  it('should render Select correctly with required props', () => {
    const wrapper = shallow(<Select id="id" options={options} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Select correctly with custom props', () => {
    const wrapper = shallow(
      <Select
        required
        placeHolder="test-placeHoldre"
        options={options}
        error="Error message"
        value={options[0].value}
        label="Label test"
        className="className"
        id="id"
        name="name"
      >
        Select Name
      </Select>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
