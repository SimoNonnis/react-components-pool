/* eslint-env jest */
import React from 'react';

import Chain from './';

describe('Test <Chain /> icon', () => {
  it('should render Chain icon correctly with default props', () => {
    const wrapper = shallow(<Chain />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Chain icon correctly with props', () => {
    const wrapper = shallow(<Chain fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
