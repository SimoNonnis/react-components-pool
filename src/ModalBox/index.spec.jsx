/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import ModalBox from './';

describe('Test <ModalBox />', () => {
  const mockOnClick = jest.fn();
  it('should render Modal correctly with required props', () => {
    const wrapper = shallow(
      <ModalBox isOpen={false} contentLabel="Demo Intro">
        children
      </ModalBox>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Modal correctly with isOpen prop set to true', () => {
    const wrapper = shallow(
      <ModalBox isOpen contentLabel="Demo Intro">
        children
      </ModalBox>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Modal passing onClose prop', () => {
    const wrapper = shallow(
      <ModalBox isOpen={false} onClose={mockOnClick} contentLabel="Demo Intro">
        children
      </ModalBox>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Modal passing tall boolean prop', () => {
    const wrapper = shallow(
      <ModalBox isOpen={false} onClose={mockOnClick} tall contentLabel="Demo Intro">
        children
      </ModalBox>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Modal passing noX boolean prop', () => {
    const wrapper = shallow(
      <ModalBox isOpen={false} onClose={mockOnClick} noX contentLabel="Demo Intro">
        children
      </ModalBox>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
