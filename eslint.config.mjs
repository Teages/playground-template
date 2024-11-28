// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'all'],
    'no-console': 'off',
  },
  // stylistic: {
  //   indent: 4,
  //   quotes: 'double',
  //   semi: true,
  // },
})
