/* eslint-env jest */
import React from 'react';

import Home from './';

describe('Test <Home /> icon', () => {
  it('should render Home icon correctly with default props', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Home icon correctly with props', () => {
    const wrapper = shallow(<Home fill="#8A2BE2" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
