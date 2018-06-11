/* eslint-env jest */
import React from 'react';

import Phone from './';

describe('Test <Phone /> icon', () => {
  it('should render Phone icon correctly with default props', () => {
    const wrapper = shallow(<Phone />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Phone icon correctly with props', () => {
    const wrapper = shallow(<Phone fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
