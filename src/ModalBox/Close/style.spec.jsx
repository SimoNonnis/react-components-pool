/* eslint-env jest */
import React from 'react';

import theme from 'themes';
import CloseModal from './style';

describe('Test <CloseModal />', () => {
  it('should render CloseModal correctly', () => {
    const wrapper = shallow(<CloseModal theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
