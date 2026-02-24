module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['dist/**', 'node_modules/**'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'alpha-value-notation': 'percentage',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'declaration-no-important': true,
    'no-descending-specificity': null,
  },
};
