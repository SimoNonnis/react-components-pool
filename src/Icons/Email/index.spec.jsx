/* eslint-env jest */
import React from 'react';

import Email from './';

describe('Test <Email /> icon', () => {
  it('should render Email icon correctly with default props', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Email icon correctly with props', () => {
    const wrapper = shallow(<Email fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
