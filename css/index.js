module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
  },
};
