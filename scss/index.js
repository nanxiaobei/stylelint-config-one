module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
  },
};
