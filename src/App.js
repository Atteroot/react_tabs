import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';
// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane>Some text 1</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane>Some text 2</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane>Some text 3</Tab.Pane>,
  },
];

const preparedTabs = tabs.map((item, index) => ({
  ...item,
  id: index,
}));

const App = () => <Tab panes={preparedTabs} />;

export default App;
