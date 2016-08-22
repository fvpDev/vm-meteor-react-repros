import { ActiveRoute } from 'meteor/zimme:active-route';
import ViewModel from 'viewmodel-react';

ViewModel.share({
	sitemap: {
		pickPageName(umbID, pageID) {
			if(!(umbID && pageID)) return '404: Not Found';
			let umb = this.sitemap().find((umb) => umb.id === umbID);
			return this.pageID() == 'landing' ? umb.name : umb.pages.find((page) => page.id === pageID).name
		},
		pickPageTitle(umbID, pageID) {
			if(!(umbID && pageID)) return '404: Not Found';
			let umb = this.sitemap().find((umb) => umb.id === umbID);
			if(this.pageID() == 'landing') { return _.has(umb, 'title') ? umb.title : umb.name }
			else {
				let page = umb.pages.find((page) => page.id === pageID);
				return _.has(page, 'title') ? page.title : page.name;
			}
		},
		isActive(regex) { return ActiveRoute.path(new RegExp(regex)) },
		sitemap: [
			{
				id: 'default',
				name: 'Defaults',
				regex: '^\\/default',
				pages: [
					{
						i: 1,
						id: 'loading',
						name: 'Loading',
						regex: '^\\/default\\/loading'
					},
					{
						i: 2,
						id: 'not-found',
						name: '404: Not Found',
						regex: '^\\/default\\/not-found'
					},
					{
						i: 3,
						id: 'access-denied',
						name: 'Access Denied',
						regex: '^\\/default\\/access-denied'
					}
				]
			},
			{
				i: 1,
				id: 'home',
				name: 'Home',
				regex: '\\/$|^\\/home'
			},
			{
				i: 2,
				id: 'about',
				name: 'About',
				regex: '^\\/about'
			},
			{
				i: 3,
				id: 'products',
				name: 'Products',
				regex: '^\\/products',
				pages: [
					{
						i: 1,
						id: 'cooling',
						name: 'Cooling',
						regex: '^\\/products\\/cooling'
					},
					{
						i: 2,
						id: 'heating',
						name: 'Heating',
						regex: '^\\/products\\/heating'
					},
					{
						i: 3,
						id: 'air-quality',
						name: 'Air Quality',
						regex: '^\\/products\\/air-quality'
					},
					{
						i: 4,
						id: 'solar',
						name: 'Solar',
						regex: '^\\/products\\/solar'
					},
					{
						i: 5,
						id: 'comfort-controls',
						name: 'Comfort Controls',
						regex: '^\\/products\\/comfort-controls'
					},
					{
						i: 6,
						id: 'ultimate-comfort-system',
						name: 'Ultimate Comfort System',
						regex: '^\\/products\\/ultimate-comfort-system'
					}
				]
			},
			{
				i: 4,
				id: 'rebates-financing',
				name: 'Rebates / Financing',
				regex: '^\\/rebates-financing'
			}
		]
	}
});
