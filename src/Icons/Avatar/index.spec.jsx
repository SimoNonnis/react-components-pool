/* eslint-env jest */
import React from 'react';

import AvatarIcon from './';

describe('Test <AvatarIcon /> icon', () => {
  it('should render AvatarIcon icon correctly with default props', () => {
    const wrapper = shallow(<AvatarIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render AvatarIcon icon correctly with props', () => {
    const wrapper = shallow(
      <AvatarIcon fill="#a4a1a1" className="testClassname" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
