import React from 'react';

import theme from 'themes';

import { SelectStyled, SelectWrap, InputStyled, TextareaStyled } from './';

describe('Test <InputStyled />', () => {
  it('should render InputStyled with theme props', () => {
    const wrapper = shallow(<InputStyled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render InputStyled with theme props and error', () => {
    const wrapper = shallow(<InputStyled error theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <SelectStyled />', () => {
  it('should render SelectStyled with theme props', () => {
    const wrapper = shallow(<SelectStyled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <SelectWrap />', () => {
  it('should render SelectWrap with theme props', () => {
    const wrapper = shallow(<SelectWrap theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render SelectWrap with error props', () => {
    const wrapper = shallow(<SelectWrap error theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <TextareaStyled />', () => {
  it('should render TextareaStyled with theme props', () => {
    const wrapper = shallow(<TextareaStyled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextareaStyled with theme props and error', () => {
    const wrapper = shallow(<TextareaStyled error theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextareaStyled disabled', () => {
    const wrapper = shallow(<TextareaStyled disabled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
