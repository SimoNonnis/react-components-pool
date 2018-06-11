import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import noop from 'lodash/noop';

import TabNavigation from '../TabNavigation/component';

import { Tabs, Tab } from './style';

/**
 * TabContainer renders content in tabbed style with optional navigation buttons.
 * @param {{children: React.Component}} children
 * @param {number} initialTabIndex
 * @param {bool} navigation
 * @returns {React.Component}
 */
class TabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex: this.props.initialTabIndex,
    };

    this.updateTab = this.updateTab.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    const tabIndex = Number(event.currentTarget.tabIndex);

    this.updateTab(tabIndex);
  }

  updateTab(index) {
    const { onTabChange } = this.props;
    const { currentTabIndex } = this.state;
    this.setState({
      currentTabIndex: index,
    });

    onTabChange(currentTabIndex, index);
  }

  render() {
    const { children, navigation } = this.props;
    const { currentTabIndex } = this.state;
    const arrayChildren = React.Children.toArray(children);
    const maxIndex = arrayChildren.length - 1;
    const tabContent = arrayChildren[currentTabIndex];

    return (
      <div>
        <Tabs justifyContent="space-between" alignItems="center">
          {arrayChildren.map((child, i) => {
            const isActiveTab = currentTabIndex === i;
            const { label } = child.props;

            return (
              <Tab
                key={uniqueId()}
                tabIndex={i}
                type="button"
                onClick={this.handleTabClick}
                isActive={isActiveTab}
              >
                {label}
              </Tab>
            );
          })}
        </Tabs>

        {tabContent}

        {arrayChildren.length > 1 &&
          navigation && (
            <TabNavigation
              currentIndex={currentTabIndex}
              maxIndex={maxIndex}
              onChange={this.updateTab}
            />
          )}
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  initialTabIndex: PropTypes.number,
  navigation: PropTypes.bool,
  onTabChange: PropTypes.func,
};

TabContainer.defaultProps = {
  initialTabIndex: 0,
  navigation: false,
  onTabChange: noop,
};

export default TabContainer;
