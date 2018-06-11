/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import InputFeedback from './';

describe('Test <InputFeedback />', () => {
  it('should render InputFeedback correctly with default props', () => {
    const wrapper = shallow(<InputFeedback />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render InputFeedback correctly with custom props', () => {
    const wrapper = shallow(<InputFeedback error="Error message" className="className" />);
    expect(wrapper).toMatchSnapshot();
  });
});
