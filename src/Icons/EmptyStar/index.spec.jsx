/* eslint-env jest */
import React from 'react';

import EmptyStar from './';

describe('Test <EmptyStar /> icon', () => {
  it('should render EmptyStar icon correctly with default props', () => {
    const wrapper = shallow(<EmptyStar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render EmptyStar icon correctly with props', () => {
    const wrapper = shallow(<EmptyStar fill="#8A2BE2" height={30} width={30} />);
    expect(wrapper).toMatchSnapshot();
  });
});
