module.exports = {
  extends: ['../scss', 'stylelint-config-css-modules'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
  },
};
