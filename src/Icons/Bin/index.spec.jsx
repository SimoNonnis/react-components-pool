/* eslint-env jest */
import React from 'react';

import Bin from './';

describe('Test <Bin /> icon', () => {
  it('should render Bin icon correctly with default props', () => {
    const wrapper = shallow(<Bin />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Bin icon correctly with props', () => {
    const wrapper = shallow(
      <Bin fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
