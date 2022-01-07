const withTM = require('next-transpile-modules')([
  'auth',
  'db',
  'lib',
  'types',
  'ui',
]);

module.exports = withTM({
  reactStrictMode: true,
});
