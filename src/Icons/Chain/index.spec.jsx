/* eslint-env jest */
import React from 'react';

import Calendar from './';

describe('Test <Calendar /> icon', () => {
  it('should render Calendar icon correctly with default props', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Calendar icon correctly with props', () => {
    const wrapper = shallow(<Calendar fill="#a4a1a1" className="pof" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
