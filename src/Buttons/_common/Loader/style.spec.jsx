/* eslint-env jest */
import React from 'react';

import { SpinnerStyled } from './style';

describe('Test <SpinnerStyled />', () => {
  it('should render SpinnerStyled with empty size props', () => {
    const wrapper = shallow(<SpinnerStyled size="" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render SpinnerStyled with small size props', () => {
    const wrapper = shallow(<SpinnerStyled size="small" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render SpinnerStyled with large size props', () => {
    const wrapper = shallow(<SpinnerStyled size="large" />);
    expect(wrapper).toMatchSnapshot();
  });
});
