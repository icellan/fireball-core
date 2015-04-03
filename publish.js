Meteor.publish('pages', function() {
	return Fireball.Pages.find();
});

Meteor.publish('settings', function() {
	return Fireball.Settings.find({
		context: {
			$in: ['client']
		}
	});
});
