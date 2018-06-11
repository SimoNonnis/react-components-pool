/* eslint-env jest */
import React from 'react';

import ProgressBar from './';

describe('Test <ProgressBar />', () => {
  it('should render ProgressBar correctly passing only required props', () => {
    const wrapper = shallow(<ProgressBar amount={90} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ProgressBar correctly with color prop', () => {
    const wrapper = shallow(<ProgressBar amount={90} color="green" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Progress bar with showValue prop', () => {
    const wrapper = shallow(<ProgressBar amount={90} showValue />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Progress bar with max value', () => {
    const wrapper = shallow(<ProgressBar amount={2} max={3} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Progress bar with max value and showRawValue prop', () => {
    const wrapper = shallow(<ProgressBar amount={2} max={3} showRawValue />);
    expect(wrapper).toMatchSnapshot();
  });
});
