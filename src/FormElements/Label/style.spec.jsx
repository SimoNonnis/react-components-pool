/* eslint-env jest */
import React from 'react';
import theme from 'themes';

import { LabelStyled, Asterisk } from './style';

describe('Test <LabelStyled />', () => {
  it('should render LabelStyled with theme props', () => {
    const wrapper = shallow(<LabelStyled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render LabelStyled with error props', () => {
    const wrapper = shallow(<LabelStyled error theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render LabelStyled with disabled props', () => {
    const wrapper = shallow(<LabelStyled disabled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Asterisk />', () => {
  it('should render Asterisk', () => {
    const wrapper = shallow(<Asterisk theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Asterisk if disabled', () => {
    const wrapper = shallow(<Asterisk theme={theme} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
