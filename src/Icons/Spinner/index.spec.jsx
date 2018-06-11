/* eslint-env jest */
import React from 'react';

import Spinner from './';

describe('Test <Spinner /> icon', () => {
  it('should render Spinner icon correctly with default props', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Spinner icon correctly with props', () => {
    const wrapper = shallow(<Spinner fill="#a4a1a1" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
