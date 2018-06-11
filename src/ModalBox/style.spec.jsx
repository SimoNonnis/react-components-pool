/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { StyledModal, Container } from './style';

describe('Test <StyledModal />', () => {
  it('should render StyledModal with theme props', () => {
    const wrapper = shallow(<StyledModal theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render StyledModal with tall prop', () => {
    const wrapper = shallow(<StyledModal theme={theme} tall />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Container />', () => {
  it('should render Container with theme props', () => {
    const wrapper = shallow(<Container theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
