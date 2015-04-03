Router.route('Fireball home', {
	name: 'Fireball.home',
	path: '/',
	controller: 'Fireball.Controller'
});

Router.route('Fireball', {
	name: 'Fireball',
	path: '/p/:_id/:title',
	controller: 'Fireball.Controller'
});

Fireball.Controller = RouteController.extend({
	template: 'Fireball',
	//loadingTemplate: 'loading',

	waitOn: function () {
		return [
			Meteor.subscribe('pages')
		];
	},

	data: function() {
		if (this.route.getName() === 'Fireball.home') {
			// search for home page
			var page = Fireball.Pages.findOne({path: '/'});
			if (page) {
				return {
					_id: page._id,
					title: page.title,
					page: page
				};
			}
		} else {
			return {
				_id: this.params._id,
				title: this.params.title,
				page: Fireball.Pages.findOne({_id: this.params._id})
			};
		}
	}
});