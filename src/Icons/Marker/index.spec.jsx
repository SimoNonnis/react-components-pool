/* eslint-env jest */
import React from 'react';

import Marker from './';

describe('Test <Marker /> icon', () => {
  it('should render Marker icon correctly with default props', () => {
    const wrapper = shallow(<Marker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Marker icon correctly with props', () => {
    const wrapper = shallow(<Marker fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
