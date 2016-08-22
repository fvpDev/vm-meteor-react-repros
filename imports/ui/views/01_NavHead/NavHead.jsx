NavHead({
	share: 'route',
	mainMenu() {
		return this.sitemap()
			.filter((route) => _.has(route, 'i'))
			.map((route) => { return { id: route.id, name: route.name, active: this.isActive(route.regex) } })
	},
	productsMenu() { return this.sitemap().filter((route) => route.id == 'products')[0].pages },
	autorun() {
		let m = this.mainMenu();
		console.log('mainMenu: ', m[0].active, m[1].active, m[2].active, m[3].active);
	},
  render() {
		<header id="navhead" class="ui fluid container">
			<div class="ui vertically padded grid">
				<div class="center aligned row">
					<div class="column">
						
						<div id="mainMenu" class="ui white horizontal link list">
							<a class="item" b="repeat: mainMenu, href: '/' + repeatObject.id, text: repeatObject.name + ': ' + repeatObject.active, class: { active: repeatObject.active }"></a>
						</div>
						<br/>
						
						<div id="mainMenu2" class="ui white horizontal link list">
							<a class="item" href={'/' + this.mainMenu()[0].id}>{this.mainMenu()[0].name + ': ' + this.mainMenu()[0].active}</a>
							<a class="item" href={'/' + this.mainMenu()[1].id}>{this.mainMenu()[1].name + ': ' + this.mainMenu()[1].active}</a>
							<a class="item" href={'/' + this.mainMenu()[2].id}>{this.mainMenu()[2].name + ': ' + this.mainMenu()[2].active}</a>
							<a class="item" href={'/' + this.mainMenu()[3].id}>{this.mainMenu()[3].name + ': ' + this.mainMenu()[3].active}</a>
						</div>
						<br/>
						
						<div id="productsMenu" class="ui white horizontal link list">
							{/*<a class="item" b="repeat: productsMenu, href: '/products/' + repeatObject.id, text: repeatObject.name, class: { active: isActive(repeatObject.regex) }"></a>*/}
							<a class="item" href="/products/cooling" b="class: { active: isActive('^\/products\/cooling') }">Cooling</a>
							<a class="item" href="/products/heating" b="class: { active: isActive('^\/products\/heating') }">Heating</a>
							<a class="item" href="/products/air-quality" b="class: { active: isActive('^\/products\/air-quality') }">Air Quality</a>
							<a class="item" href="/products/solar" b="class: { active: isActive('^\/products\/solar') }">Solar</a>
							<a class="item" href="/products/comfort-controls" b="class: { active: isActive('^\/products\/comfort-controls') }">Comfort Controls</a>
							<a class="item" href="/products/ultimate-comfort-system" b="class: { active: isActive('^\/products\/ultimate-comfort-system') }">Ultimate Comfort System</a>
						</div>
						
					</div>
				</div>
			</div>
		</header>
  }
});