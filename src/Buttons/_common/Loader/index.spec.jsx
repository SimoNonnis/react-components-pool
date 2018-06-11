/* eslint-env jest */
import React from 'react';

import Loader from './';

describe('Test <Loader />', () => {
  it('should render Loader correctly with large props', () => {
    const wrapper = shallow(<Loader size="large" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Loader correctly with small props', () => {
    const wrapper = shallow(<Loader size="small" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Loader correctly with empty size props', () => {
    const wrapper = shallow(<Loader size="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
