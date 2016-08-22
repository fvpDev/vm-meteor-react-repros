import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';

import { Layout } from '/imports/ui/views/Layout.jsx';

/* React Mount Configuration */

const mount2 = withOptions({
    rootId: 'root'/*,
    rootProps: {'className': ''}*/
}, mount);

/* Default */

FlowRouter.route('/default/:page?', {
  name: 'default',
	action(params, queryParams) {
		if(!params.page) FlowRouter.setParams({ page: 'loading' });
    else mount2(Layout, {
      main: '',
    })
	}
});

/* Home */

FlowRouter.route('/home', { triggersEnter: [(context, redirect) => { redirect('/') }] });
FlowRouter.route('/', {
  name: 'home',
	action(params, queryParams) {
		mount2(Layout, {
      main: '',
    })
	}
});

/* About */

FlowRouter.route('/about', {
  name: 'about',
	action(params, queryParams) {
		mount2(Layout, {
      main: '',
    })
	}
});

/* Products */

FlowRouter.route('/products/:page?', {
  name: 'products',
	action(params, queryParams) {
		if(!params.page) FlowRouter.setParams({ page: 'cooling' });
    else mount2(Layout, {
      main: '',
    })
	}
});

/* RebatesFinancing */

FlowRouter.route('/rebates-financing', {
  name: 'rebates-financing',
	action(params, queryParams) {
		mount2(Layout, {
      main: '',
    });
	}
});