/* eslint-env jest */
import React from 'react';

import Star from './';

describe('Test <Star /> icon', () => {
  it('should render Star icon correctly with default props', () => {
    const wrapper = shallow(<Star />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Star icon correctly with props', () => {
    const wrapper = shallow(<Star fill="#8A2BE2" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
