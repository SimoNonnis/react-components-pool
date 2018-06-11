/* eslint-env jest */
import React from 'react';

import ScaleIcon from './';

describe('Test <ScaleIcon /> icon', () => {
  it('should render ScaleIcon icon correctly with default props', () => {
    const wrapper = shallow(<ScaleIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ScaleIcon icon correctly with props', () => {
    const wrapper = shallow(
      <ScaleIcon fill="#ececec" stroke="#2c4c66" className="pof" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
