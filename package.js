Package.describe({
  name: 'fireball:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('templating', 'client');
  api.use('livedata');
  api.use('iron:router');
  api.use('less', 'client');
  api.use('underscore');

  api.addFiles('fireball:core.js');
  api.addFiles('collections.js');

  // Templates
  api.addFiles('spacebars-helpers.js', 'client');

  api.addFiles('array.js');

  api.addFiles('publish.js', 'server');
  api.addFiles('startup.js', 'client');
  api.addFiles('routes.js', 'client');
  api.export('Fireball');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fireball:core');
  api.addFiles('fireball:core-tests.js');
});
