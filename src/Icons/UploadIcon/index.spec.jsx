/* eslint-env jest */
import React from 'react';

import UploadIcon from './';

describe('Test <UploadIcon /> icon', () => {
  it('should render UploadIcon icon correctly with default props', () => {
    const wrapper = shallow(<UploadIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render UploadIcon icon correctly with props', () => {
    const wrapper = shallow(
      <UploadIcon fill="#a4a1a1" height={30} width={30} className="testClass" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
