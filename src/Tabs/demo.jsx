import React from 'react';

import { TabContent, TabContainer } from './index';
import { Home, Size, Bulb, Pin } from '../Icons/index';

import { LabelText } from './style';

const customTabsStyles = {
  padding: '10px',
  backgroundColor: '#F6F6F6',
};

function TabsDemo() {
  return (
    <div style={customTabsStyles}>
      <TabContainer navigation>
        <TabContent
          label={
            <div>
              <Home width={20} height={20} />
              <LabelText>Type & Price</LabelText>
            </div>
          }
        >
          The 1st tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Size width={20} height={20} />
              <LabelText>Size & Room</LabelText>
            </div>
          }
        >
          The 2nd tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Bulb width={20} height={20} />
              <LabelText>Utilities & Features</LabelText>
            </div>
          }
        >
          The 3th tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Pin width={20} height={20} />
              <LabelText>Map & Directions</LabelText>
            </div>
          }
        >
          The 4th tab content is here
        </TabContent>
      </TabContainer>
    </div>
  );
}

export default TabsDemo;
