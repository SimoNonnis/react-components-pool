import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ArrowLeft, ArrowRight } from '../../Icons';

import { NavigationGroup, Text, Icon, NavigationButton } from './style';
/**
 * TabNavigation renders navigation buttons for the tabs.
 * @param {function(number)} onChange
 * @param {number} currentIndex
 * @param {number} maxIndex
 * @returns {React.Component}
 */
class TabNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.currentIndex,
      maxIndex: this.props.maxIndex,
    };
  }

  componentWillReceiveProps({ currentIndex, maxIndex }) {
    this.setState({
      currentIndex,
      maxIndex,
    });
  }

  updateIndex = event => {
    event.preventDefault();
    const index = Number(event.currentTarget.value);
    const { onChange } = this.props;
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex + index,
    });

    onChange(currentIndex + index);
  };

  render() {
    const { currentIndex, maxIndex } = this.state;

    return (
      <NavigationGroup>
        {currentIndex !== 0 && (
          <NavigationButton type="button" value={-1} onClick={this.updateIndex}>
            <Icon>
              <ArrowLeft width={20} height={20} />
            </Icon>
            <Text>Previous</Text>
          </NavigationButton>
        )}
        {currentIndex !== maxIndex && (
          <NavigationButton
            type="button"
            disabled={currentIndex === maxIndex}
            value={1}
            onClick={this.updateIndex}
          >
            <Text>Next</Text>
            <Icon>
              <ArrowRight width={20} height={20} />
            </Icon>
          </NavigationButton>
        )}
      </NavigationGroup>
    );
  }
}

TabNavigation.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TabNavigation;
