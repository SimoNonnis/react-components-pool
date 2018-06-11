/* eslint-env jest */
import React from 'react';

import Confirmation from './';

describe('Test <Confirmation /> icon', () => {
  it('should render Confirmation icon correctly with default props', () => {
    const wrapper = shallow(<Confirmation />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Confirmation icon correctly with props', () => {
    const wrapper = shallow(
      <Confirmation fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
