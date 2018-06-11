/* eslint-env jest */
import React from 'react';

import ArrowRight from './';

describe('Test <ArrowRight /> icon', () => {
  it('should render ArrowRight icon correctly with default props', () => {
    const wrapper = shallow(<ArrowRight />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ArrowRight icon correctly with props', () => {
    const wrapper = shallow(
      <ArrowRight fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
