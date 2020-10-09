module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
  },
  rules: {
    'space-before-function-paren': 1,
  },
}
