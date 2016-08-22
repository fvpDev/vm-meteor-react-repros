import { DocHead } from 'meteor/kadira:dochead';
import { FlowRouter } from 'meteor/kadira:flow-router';

import ViewModel from 'viewmodel-react';

ViewModel.share({
	route: {
		share: ['app', 'sitemap'],
		umbID() { return FlowRouter.getRouteName() },
		pageID() { return FlowRouter.getParam('page') ? FlowRouter.getParam('page') : 'landing' },
		umb() { return this.umbID() ? _.findWhere(this.sitemap(), { id: this.umbID() }) : {} },
		umbTitle() { return _.has(this.umb(), 'title') ? this.umb().title : this.umb().name },
		pageTitle() { return this.pickPageTitle(this.umbID(), this.pageID()) },
		pageName() { return this.pickPageName(this.umbID(), this.pageID()) },
	
		uIs(id) { return id === this.umbID() },
		pIs(id) { return id === this.pageID() },
    onRendered() {
			DocHead.setTitle(this.app().title)
			DocHead.addMeta({ name: 'description', content: this.app().description });
			DocHead.addMeta({ name: 'fragment', content: '!' });
			DocHead.addMeta({ name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1.0' });
    },
		autorun: [
			function() { if(this.umbID()) DocHead.setTitle(this.app().shortTitle + ' | ' + this.pageTitle()) },
			function() {/*
				console.log('umbID:', this.umbID());
				console.log('pageID: ' + this.pageID());
				console.log('pageName: ' + this.pageName());
				console.log('pageTitle: ' + this.pageTitle());
			*/}
		]
	}
});
