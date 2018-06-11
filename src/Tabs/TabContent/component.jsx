import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './style';

/**
 * TabContent renders the content of the tab, wrapped in a div.
 * @param {{children: React.Component}} children
 * @return {React.Component}
 */
const TabContent = ({ children }) => <Container>{children}</Container>;

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContent;
