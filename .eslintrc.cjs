module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': ['warn'],
    'no-console': ['warn'],
    'no-unused-vars': ['warn'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-no-target-blank': ['warn'],
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
  },
}
