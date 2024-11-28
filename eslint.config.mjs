// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'all'], // my personal preference
    'no-console': 'off', // playground needs console.log
  },
  // some other options
  // stylistic: {
  //   indent: 4,
  //   quotes: 'double',
  //   semi: true,
  // },
})
