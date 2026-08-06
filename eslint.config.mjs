import fingerprintConfig from '@fingerprintjs/eslint-config-dx-team'

export default [
  ...fingerprintConfig,
  {
    files: ['**/*.{js,cjs,mjs,ts,mts,cts}'],
  },
  {
    files: ['__tests__/**/*.ts'],
    rules: {
      '@typescript-eslint/consistent-type-assertions': 'off',
    },
  },
]
