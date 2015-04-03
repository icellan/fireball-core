Fireball.Pages = new Meteor.Collection('fireball_pages');
Fireball.Pages.allow({
	insert: function(userId, doc) {
		if (userId)
			return true;
	},
	update: function(userId, doc, fieldNames, modifier) {
		if (userId)
			return true
	},
	remove: function(userId) {
		if (userId)
			return true
	}
});
Fireball.Settings = new Meteor.Collection('fireball_settings');
