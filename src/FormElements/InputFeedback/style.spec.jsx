/* eslint-env jest */
import React from 'react';

import theme from 'themes';

import { ErrorStyled } from './style';

describe('Test <ErrorStyled />', () => {
  it('should render ErrorStyled with theme props', () => {
    const wrapper = shallow(<ErrorStyled theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
