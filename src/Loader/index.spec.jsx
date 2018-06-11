/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import Loader from './';

describe('Test <Select />', () => {
  it('should render Loader correctly with default props', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Loader correctly with custom props', () => {
    const wrapper = shallow(
      <Loader
        background="pink"
        opacity="0.2"
        color="red"
        iconWidth={20}
        iconHeight={20}
        width="150px"
        height="150px"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
