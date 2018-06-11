/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { Container, Radio, Label } from './style';

describe('Test <Container />', () => {
  it('should render Container with theme props', () => {
    const wrapper = shallow(<Container theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Radio />', () => {
  it('should render Check with theme props', () => {
    const wrapper = shallow(<Radio theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Check with theme disabled props', () => {
    const wrapper = shallow(<Radio theme={theme} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Label />', () => {
  it('should render Label with theme props', () => {
    const wrapper = shallow(<Label theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label with disabled props', () => {
    const wrapper = shallow(<Label theme={theme} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Label with error props', () => {
    const wrapper = shallow(<Label theme={theme} error="error test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
