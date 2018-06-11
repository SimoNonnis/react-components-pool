/* eslint-env jest */
import React from 'react';

import Hamburger from './';

describe('Test <Hamburger /> icon', () => {
  it('should render Hamburger icon correctly with default props', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Hamburger icon correctly with props', () => {
    const wrapper = shallow(<Hamburger fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
