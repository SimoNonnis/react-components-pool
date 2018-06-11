/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { Btn, BtnLink } from './style';

describe('Test <Btn />', () => {
  it('should render Btn with defaults', () => {
    const wrapper = shallow(<Btn theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn of type "secondary"', () => {
    const wrapper = shallow(<Btn theme={theme} type="secondary" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn of type "highlight" with 100% width', () => {
    const wrapper = shallow(<Btn theme={theme} type="outline" fullWidth />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn of type "white"', () => {
    const wrapper = shallow(<Btn theme={theme} type="white" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn of type "danger"', () => {
    const wrapper = shallow(<Btn theme={theme} type="danger" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn with props size "small" and "disabled" true', () => {
    const wrapper = shallow(<Btn theme={theme} size="small" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn with props size "large" and type "highlight"', () => {
    const wrapper = shallow(<Btn theme={theme} size="large" type="highlight" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn with custom rounded corners', () => {
    const wrapper = shallow(<Btn theme={theme} rounded={50} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Btn with type of link ', () => {
    const wrapper = shallow(<Btn theme={theme} type="link" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Btn with styleType of link and type of button', () => {
    const wrapper = shallow(<Btn theme={theme} styleType="link" type="button" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <BtnLink />', () => {
  it('should render BtnLink with defaults', () => {
    const wrapper = shallow(<BtnLink theme={theme} to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink of type "secondary"', () => {
    const wrapper = shallow(<BtnLink theme={theme} type="secondary" to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink of type "highlight" with 100% width', () => {
    const wrapper = shallow(<BtnLink theme={theme} type="outline" fullWidth to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink of type "white"', () => {
    const wrapper = shallow(<BtnLink theme={theme} type="white" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink with props size "small" and "disabled" true', () => {
    const wrapper = shallow(<BtnLink theme={theme} size="small" disabled to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink with props size "large" and type "highlight"', () => {
    const wrapper = shallow(<BtnLink theme={theme} size="large" type="highlight" to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink with custom rounded corners', () => {
    const wrapper = shallow(<BtnLink theme={theme} rounded={50} to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink with external prop', () => {
    const wrapper = shallow(<BtnLink theme={theme} external to="test.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BtnLink with external prop and type of highlight', () => {
    const wrapper = shallow(<BtnLink theme={theme} external to="test.com" type="highlight" />);
    expect(wrapper).toMatchSnapshot();
  });
});
