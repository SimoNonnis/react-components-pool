/* eslint-env jest */
import React from 'react';

import ProofOfFundsIcon from './';

describe('Test <ProofOfFundsIcon /> icon', () => {
  it('should render ProofOfFundsIcon icon correctly with default props', () => {
    const wrapper = shallow(<ProofOfFundsIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ProofOfFundsIcon icon correctly with props', () => {
    const wrapper = shallow(
      <ProofOfFundsIcon fill="#ececec" stroke="#2c4c66" className="pof" height={30} width={30} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
