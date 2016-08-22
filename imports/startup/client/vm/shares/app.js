import ViewModel from 'viewmodel-react';

ViewModel.share({
	app: {
		app() {
			let name = 'Cochran Cooling & Heating',
					bizType = 'LLC',
					year = '2016';
			return {
				abbr: 'CCH',
				name: name,
				title: name,
				shortTitle: 'Cochran C&H',
				description: name + ' Official Website',
				company: name + ', ' + bizType,
				copyright: '&copy; ' + year + ' ' + name + ', ' + bizType
			}
		}
	}
})