/* eslint-env jest */
import React from 'react';

import HouseSimpleLogo from './';

describe('Test <HouseSimpleLogo /> icon', () => {
  it('should render HouseSimpleLogo icon correctly with default props', () => {
    const wrapper = shallow(<HouseSimpleLogo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render HouseSimpleLogo icon correctly with props', () => {
    const wrapper = shallow(
      <HouseSimpleLogo fill="#a4a1a1" className="pof" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
