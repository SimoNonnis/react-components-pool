/* eslint-env jest */
import React from 'react';

import HalfStar from './';

describe('Test <HalfStar /> icon', () => {
  it('should render HalfStar icon correctly with default props', () => {
    const wrapper = shallow(<HalfStar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render HalfStar icon correctly with props', () => {
    const wrapper = shallow(<HalfStar fill="#8A2BE2" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
