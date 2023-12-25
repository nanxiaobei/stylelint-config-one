module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'declaration-property-value-no-unknown': true,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['value'] }],
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested'] },
    ],
  },
};
