/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import ButtonLink from './';

describe('Test <ButtonLink />', () => {
  it('should render ButtonLink correctly with required props', () => {
    const wrapper = shallow(<ButtonLink to="/internal">Click me</ButtonLink>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ButtonLink correctly with props size "small"  true', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" size="small">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ButtonLink correctly with props styleType="secondary and type="button"', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" styleType="secondary" type="button">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ButtonLink correctly with props type="secondary', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" type="secondary">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a ButtonLink of type "highlight" with 100% width', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" type="outline" fullWidth>
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ButtonLink correctly with props size "large" and type "highlight"', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" size="large" type="highlight">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ButtonLink correctly with custom rounded corners', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" rounded={50}>
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a ButtonLink of type "white"', () => {
    const wrapper = shallow(
      <ButtonLink to="/internal" type="white">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a ButtonLink with external', () => {
    const wrapper = shallow(
      <ButtonLink to="www.test.com" external>
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a ButtonLink with styleType="secondary and type="button"', () => {
    const wrapper = shallow(
      <ButtonLink to="www.test.com" external styleType="highlight" type="button">
        Click me
      </ButtonLink>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
