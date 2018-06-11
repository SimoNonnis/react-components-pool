/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { Circle } from './style';

describe('Test <Circle />', () => {
  it('should render Circle correctly with no status', () => {
    const wrapper = shallow(<Circle status theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Circle correctly with status="ready"', () => {
    const wrapper = shallow(<Circle status="ready" theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Circle correctly with status="awaiting"', () => {
    const wrapper = shallow(<Circle status="awaiting" theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
