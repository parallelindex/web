module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  settings: {
    next: {
      rootDir: [
        'apps/admin/',
        'apps/www/',
        'packages/config/',
        'packages/db/',
        'packages/tsconfig/',
      ],
    },
  },
};
