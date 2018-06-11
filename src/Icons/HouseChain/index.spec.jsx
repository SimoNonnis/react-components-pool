/* eslint-env jest */
import React from 'react';

import HouseChainIcon from './';

describe('Test <HouseChainIcon /> icon', () => {
  it('should render HouseChainIcon icon correctly with default props', () => {
    const wrapper = shallow(<HouseChainIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render HouseChainIcon icon correctly with props', () => {
    const wrapper = shallow(
      <HouseChainIcon
        fill="#a4a1a1"
        primaryStroke="#2c4c66"
        secondaryStroke="'#285a82"
        className="pof"
        height={30}
        width={30}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
