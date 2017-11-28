Package.describe({
  name: 'slayerokk:preloader',
  version: '0.0.1',
  summary: 'Show a centered loading spinner while application code is downloading.',
  git: 'https://github.com/slayerokk/meteor-preloader.git',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('meteorhacks:inject-initial@1.0.4', ['server']);
  api.addAssets('loader.html', 'server');
  api.addFiles('start-loader.js', ['server', 'client']);
});
