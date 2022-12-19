(module.exports = {
  extends: ['@moralisweb3', 'plugin:@next/next/recommended'],
  ignorePatterns: ['**/build/**/*'],
  rules: {
    'no-console': 'off',
  },
}),
  {
    extends: 'next',
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  };
