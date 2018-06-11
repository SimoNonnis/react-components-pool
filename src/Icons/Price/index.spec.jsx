/* eslint-env jest */
import React from 'react';

import Price from './';

describe('Test <Price /> icon', () => {
  it('should render Price icon correctly with default props', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Price icon correctly with props', () => {
    const wrapper = shallow(<Price fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
