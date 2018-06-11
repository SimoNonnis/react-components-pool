/* eslint-env jest */
import React from 'react';

import TabNavigation from './component';
import { NavigationButton } from './style';

describe('Test <TabNavigation />', () => {
  let wrapper;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    wrapper = shallow(<TabNavigation currentIndex={0} maxIndex={3} onChange={callback} />);
  });

  it('should find <TabNavigation /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check if required prop currentIndex is present', () => {
    expect(wrapper.instance().props.currentIndex).toEqual(0);
  });

  it('should check if required prop maxIndex is present', () => {
    expect(wrapper.instance().props.maxIndex).toEqual(3);
  });

  it('should check if required prop handleNavigationClick() is present', () => {
    expect(wrapper.instance().props.onChange).toEqual(callback);
  });

  it('should render 1 button on initial mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render multiple buttons when not on the beginning or end tab', () => {
    wrapper.setState({ currentIndex: 2 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 button on the last tab', () => {
    wrapper.setState({ currentIndex: 3 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should check if prev button is enabled after clicking on the next button', () => {
    const button = wrapper.find(NavigationButton);
    button.simulate('click', {
      preventDefault() {},
      currentTarget: {
        value: 1,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should check if next button is disabled when last tab is showing', () => {
    wrapper.setState({ currentIndex: 3 });

    expect(wrapper).toMatchSnapshot();
  });
});
