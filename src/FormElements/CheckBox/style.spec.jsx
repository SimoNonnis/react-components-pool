/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { Container, Check, Label } from './style';

describe('Test <Container />', () => {
  it('should render Container with theme props', () => {
    const wrapper = shallow(<Container theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Check />', () => {
  it('should render Check with theme props', () => {
    const wrapper = shallow(<Check theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Check with theme disabled props', () => {
    const wrapper = shallow(<Check theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Label />', () => {
  it('should render Label with theme props', () => {
    const wrapper = shallow(<Label theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label with error', () => {
    const wrapper = shallow(<Label theme={theme} error />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label with disabled', () => {
    const wrapper = shallow(<Label theme={theme} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
