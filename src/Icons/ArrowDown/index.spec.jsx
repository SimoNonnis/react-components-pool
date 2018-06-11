/* eslint-env jest */
import React from 'react';

import ArrowDown from './';

describe('Test <ArrowDown /> icon', () => {
  it('should render ArrowDown icon correctly with default props', () => {
    const wrapper = shallow(<ArrowDown />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ArrowDown icon correctly with props', () => {
    const wrapper = shallow(
      <ArrowDown fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
