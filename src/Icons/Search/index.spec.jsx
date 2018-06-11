/* eslint-env jest */
import React from 'react';

import SearchIcon from './';

describe('Test <SearchIcon /> icon', () => {
  it('should render SearchIcon icon correctly with default props', () => {
    const wrapper = shallow(<SearchIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render SearchIcon correctly with props', () => {
    const wrapper = shallow(
      <SearchIcon fill="#a4a1a1" className="search" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
