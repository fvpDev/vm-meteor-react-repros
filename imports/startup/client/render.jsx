import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';
import ViewModel from 'viewmodel-react';

import { Layout } from '/imports/ui/views/Layout.jsx';

window.ViewModel = ViewModel; // Make ViewModel accessible globally (development only)

Meteor.startup(() => {
  ReactDOM.render(<Layout />, document.getElementById('react-root'));
});