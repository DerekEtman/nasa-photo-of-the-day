import React from 'react';
import { Menu } from 'semantic-ui-react';

const items = [
  { key: 'Calendar', name: 'Calendar' },
  { key: 'MeteorShowers', name: 'Meteor Showers' },
]

const SpaceMenu = () => <Menu items={items} />

export default SpaceMenu;