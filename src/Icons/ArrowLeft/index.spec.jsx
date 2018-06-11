/* eslint-env jest */
import React from 'react';

import ArrowLeft from './';

describe('Test <ArrowLeft /> icon', () => {
  it('should render ArrowLeft icon correctly with default props', () => {
    const wrapper = shallow(<ArrowLeft />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ArrowLeft icon correctly with props', () => {
    const wrapper = shallow(
      <ArrowLeft fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
