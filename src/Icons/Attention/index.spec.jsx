/* eslint-env jest */
import React from 'react';

import Attention from './';

describe('Test <Attention /> icon', () => {
  it('should render Attention icon correctly with default props', () => {
    const wrapper = shallow(<Attention />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Attention icon correctly with props', () => {
    const wrapper = shallow(
      <Attention fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
