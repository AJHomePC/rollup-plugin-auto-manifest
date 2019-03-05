/* eslint-env node */

import manifest from './index'
import pkg from './package.json'

const plugins = [
  manifest({
    src: 'fixtures/src/manifest.json',
    dest: 'fixtures/dest/manifest.json',
    pkg
  })
]

export default [
  {
    input: 'fixtures/src/background.js',
    output: [
      {
        file: 'fixtures/dest/background-esm.js',
        format: 'esm'
      }
    ],
    plugins
  },
  {
    input: 'fixtures/src/content.js',
    output: [
      {
        file: 'fixtures/dest/content.js',
        format: 'esm'
      }
    ],
    plugins
  }
]
