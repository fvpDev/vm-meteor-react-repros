import React from 'react';
import { mount } from 'react-mounter';

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '/imports/ui/views/Layout.jsx';
import { Home } from '/imports/ui/views/routes/Home.jsx';


/* Home */

FlowRouter.route('/home', { triggersEnter: [(context, redirect) => { redirect('/') }] });
FlowRouter.route('/', {
  name: 'home',
	action(params, queryParams) {
		mount(Layout, {
      main: <Home />,
    })
	}
});
