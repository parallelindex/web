const withTM = require('next-transpile-modules')([
  'auth',
  'db',
  'lib',
  'types',
  'ui',
]);
const { withPlausibleProxy } = require('next-plausible');

const supabaseUrl = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL);

module.exports = withTM(
  withPlausibleProxy()({
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
    images: {
      domains: [supabaseUrl.host],
    },
    reactStrictMode: true,
  }),
);
