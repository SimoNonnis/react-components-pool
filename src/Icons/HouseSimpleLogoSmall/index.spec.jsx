/* eslint-env jest */
import React from 'react';

import HouseSimpleLogoSmall from './';

describe('Test <HouseSimpleLogoSmall /> icon', () => {
  it('should render HouseSimpleLogoSmall icon correctly with default props', () => {
    const wrapper = shallow(<HouseSimpleLogoSmall />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render HouseSimpleLogoSmall icon correctly with props', () => {
    const wrapper = shallow(
      <HouseSimpleLogoSmall fill="#a4a1a1" className="pof" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
