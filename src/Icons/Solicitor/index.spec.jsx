/* eslint-env jest */
import React from 'react';

import Solicitor from './';

describe('Test <Solicitor /> icon', () => {
  it('should render Solicitor icon correctly with default props', () => {
    const wrapper = shallow(<Solicitor />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Solicitor icon correctly with props', () => {
    const wrapper = shallow(
      <Solicitor fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
