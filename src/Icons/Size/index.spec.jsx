/* eslint-env jest */
import React from 'react';

import Size from './';

describe('Test <Size /> icon', () => {
  it('should render Size icon correctly with default props', () => {
    const wrapper = shallow(<Size />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Size icon correctly with props', () => {
    const wrapper = shallow(
      <Size fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
