module.exports = {
  extends: ['stylelint-config-standard-scss'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
};

