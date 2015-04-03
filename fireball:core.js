Fireball = {};
Fireball.configuration = {};
Fireball.pageConfiguration = {};
Fireball.templates = [];

Fireball.addConfiguration = function(name, options) {
	Fireball.configuration[name] = options;
};

Fireball.addPageConfiguration = function(name, options) {
	Fireball.pageConfiguration[name] = options;
};

Fireball.addTemplates = function(templates) {
	_.each(templates, function(template) {
		Fireball.addTemplate(template);
	})
};

Fireball.addTemplate = function(template) {
	Fireball.templates.push(template);
};

Fireball.getImageUrl = function(image) {
	// get the image from the CollectionFS collection and return a URL for the browser
	return '/packages/fireball_restart/images/1.jpg';
};

Fireball.getSiteSetting = function(settingName) {
	var siteSettings = Fireball.Settings.findOne({_id: 'siteSettings'});
	if (siteSettings) {
		return Fireball.getSetting(settingName, siteSettings.settings);
	}
};

Fireball.getSetting = function(settingName, settings) {
	if (settingName.indexOf(']') > 0) {
		// translate setting[name] -> setting/name
		settingName = settingName.replace(/\[/g, '/').replace(/\]/g, '');
	}
	var setting = settingName.split('/');
	if (settings) {
		var settingValues = settings;
		while(setting.length && settingValues) {
			var currentName = setting.shift();
			settingValues = settingValues[currentName];
		}
		return settingValues;
	}
};

/**
 * Server only code
 */
if (Meteor.isServer) {
	Fireball.saveSiteSettings = function(siteSettings) {
		Fireball.Settings.upsert({
			_id: 'siteSettings'
		},{
			$set: {
				settings: siteSettings,
				context: ['client']
			}
		});
	};
}
