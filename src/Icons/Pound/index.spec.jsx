/* eslint-env jest */
import React from 'react';

import Pound from './';

describe('Test <Pound /> icon', () => {
  it('should render Pound icon correctly with default props', () => {
    const wrapper = shallow(<Pound />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Pound icon correctly with props', () => {
    const wrapper = shallow(<Pound fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
