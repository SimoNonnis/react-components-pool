/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { Container, Bar } from './style';

describe('Test <Container />', () => {
  it('should render Container correctly', () => {
    const wrapper = shallow(<Container color="orange" theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Bar />', () => {
  it('should render Bar correctly', () => {
    const wrapper = shallow(<Bar color="orange" theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
