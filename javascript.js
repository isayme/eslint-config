module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    'prettier/standard',
  ],
  env: {
    node: true,
  },
  rules: {
    'space-before-function-paren': 1,
  },
}
