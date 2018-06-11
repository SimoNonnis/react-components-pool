/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import Button from './';

describe('Test <Button />', () => {
  const mockOnClick = jest.fn();
  it('should render Button correctly with required props', () => {
    const wrapper = shallow(<Button onClick={mockOnClick}>Click me</Button>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props size "small" and "disabled" true', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} size="small" disabled>
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props type="button"', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} type="button">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props type="submit"', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} type="submit">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props styleType="secondary and type="button"', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} styleType="secondary" type="button">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props type="secondary', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} type="secondary">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a Button of type "highlight" with 100% width', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} type="outline" fullWidth>
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props size "small" and "disabled" true', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} size="small" disabled>
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with props size "large" and type "highlight"', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} size="large" type="highlight">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Button correctly with custom rounded corners', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} rounded={50}>
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a Button of type "white"', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} type="white">
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly a Button with loading true', () => {
    const wrapper = shallow(
      <Button onClick={mockOnClick} loading>
        Click me
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
