/* eslint-env jest */
import React from 'react';

import Cross from './';

describe('Test <Cross /> icon', () => {
  it('should render Cross icon correctly with default props', () => {
    const wrapper = shallow(<Cross />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Cross icon correctly with props', () => {
    const wrapper = shallow(<Cross fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
