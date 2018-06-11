/* eslint-env jest */
import React from 'react';

import ArrowUp from './';

describe('Test <ArrowUp /> icon', () => {
  it('should render ArrowUp icon correctly with default props', () => {
    const wrapper = shallow(<ArrowUp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ArrowUp icon correctly with props', () => {
    const wrapper = shallow(
      <ArrowUp fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
