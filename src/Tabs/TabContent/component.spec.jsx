/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import TabContent from './component';

describe('Test <TabContent />', () => {
  const wrapper = shallow(<TabContent>The 1st tab content is here</TabContent>);

  it('should find <TabContent /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
