/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import TabContainer from './component';
import TabContent from '../TabContent/component';

import { Tab } from './style';

describe('Test <TabContainer />', () => {
  let wrapper;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    wrapper = shallow(
      <TabContainer onTabChange={callback} navigation>
        <TabContent initialTabIndex={0} label={<div>Type & Price</div>}>
          The 1st tab content is here
        </TabContent>
        <TabContent label={<div>Size & Room</div>}>The 2nd tab content is here</TabContent>
      </TabContainer>
    );
  });

  it('should find 2 <button /> with class .tab', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger onTabChanged when the tab is updated', () => {
    const firstTabControl = wrapper.find(Tab).first();
    firstTabControl.simulate('click', { currentTarget: { tabIndex: 1 } });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should find a class .activeTab on last Tab if clicked', () => {
    wrapper
      .find(Tab)
      .last()
      .simulate('click', { currentTarget: { tabIndex: 1 } });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Test a single Tab', () => {
    let tab;

    beforeEach(() => {
      tab = wrapper.find(Tab).first();
    });

    it('should find a class .activeTab on first render', () => {
      expect(tab.prop('isActive')).toBeTruthy();
    });

    it('should find label text to be "Type & Price"', () => {
      expect(tab.find('div').text()).toEqual('Type & Price');
    });
  });
});
