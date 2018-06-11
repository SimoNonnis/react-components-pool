/* eslint-env jest */
import React from 'react';

import Indicator from './';

describe('Test <Indicator />', () => {
  it('should render Indicator but will not be visible', () => {
    const wrapper = shallow(<Indicator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Indicator with a green circle if status prop is "ready"', () => {
    const wrapper = shallow(<Indicator status="ready" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Indicator with a orange circle if status prop is "awaiting"', () => {
    const wrapper = shallow(<Indicator status="awaiting" />);
    expect(wrapper).toMatchSnapshot();
  });
});
