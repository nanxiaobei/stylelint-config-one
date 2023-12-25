module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'declaration-property-value-no-unknown': true,
    'at-rule-no-unknown': null,
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested'] },
    ],
  },
};
