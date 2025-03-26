import unjs from "eslint-config-unjs"

export default unjs({
  ignores: ["**/.netlify", "**/*.gen.*", "**/dist"],
  rules: {
    "unicorn/no-null": 0,
    "no-undef": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "unicorn/filename-case": 0,
    "unicorn/consistent-function-scoping": 0,
    'import/first': 'off',
    'import/order': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
})
