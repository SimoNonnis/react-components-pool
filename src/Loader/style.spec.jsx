import React from 'react';

import { Container } from './style';

describe('Test <Container />', () => {
  it('should render Container with custom props', () => {
    const wrapper = shallow(<Container width={20} height={20} background="#fff" opacity="1" />);
    expect(wrapper).toMatchSnapshot();
  });
});
