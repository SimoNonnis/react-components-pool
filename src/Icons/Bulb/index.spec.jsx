/* eslint-env jest */
import React from 'react';

import Bulb from './';

describe('Test <Bulb /> icon', () => {
  it('should render Bulb icon correctly with default props', () => {
    const wrapper = shallow(<Bulb />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Bulb icon correctly with props', () => {
    const wrapper = shallow(
      <Bulb fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
