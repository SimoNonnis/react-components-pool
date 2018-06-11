/* eslint-env jest */
import React from 'react';

import DocumentPlaceholder from './';

describe('Test <DocumentPlaceholder /> icon', () => {
  it('should render DocumentPlaceholder icon correctly with default props', () => {
    const wrapper = shallow(<DocumentPlaceholder />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render DocumentPlaceholder icon correctly with props', () => {
    const wrapper = shallow(
      <DocumentPlaceholder fill="#a4a1a1" height={30} width={30} className="testClass" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
