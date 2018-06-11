/* eslint-env jest */
import React from 'react';

import Pin from './';

describe('Test <Pin /> icon', () => {
  it('should render Pin icon correctly with default props', () => {
    const wrapper = shallow(<Pin />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Pin icon correctly with props', () => {
    const wrapper = shallow(<Pin fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
