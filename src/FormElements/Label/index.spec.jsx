/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import Label from './';

describe('Test <Label />', () => {
  it('should render Label correctly with default props', () => {
    const wrapper = shallow(<Label htmlFor="id" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label correctly with custom props', () => {
    const wrapper = shallow(
      <Label error className="className" htmlFor="id" required>
        Label Name
      </Label>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label correctly with custom props', () => {
    const wrapper = shallow(
      <Label error className="className" htmlFor="id" required disabled>
        Label Name
      </Label>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
