import { resolve } from 'node:path'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import externals from 'rollup-plugin-node-externals'
import { getLocalPackagePath } from '../../scripts/utils.mjs'
import {
  EXPERIMENTAL,
  channel,
  formats,
  getOutputDir,
} from '../shared/src/rollup/helpers.mjs'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx']

function getPlugins() {
  return [
    externals(),
    nodeResolve({
      extensions,
    }),
    replace(getReplaceOptions(true)),
    alias({
      entries: {
        '@pluralsight/shared': resolve(
          getLocalPackagePath('shared'),
          'src/index.ts'
        ),
      },
    }),
    commonjs(),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      exclude: '/**/node_modules/**',
      extensions,
      include: ['src/**/*', '../shared/src/**/*'],
      presets: [
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ].filter(Boolean)
}

function getReplaceOptions(isProduction) {
  const nodeEnv = isProduction ? 'production' : 'development'

  return {
    preventAssignment: true,
    values: {
      __EXPERIMENTAL__: EXPERIMENTAL,
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  }
}

function getUnbundledOutputOptions(formatType) {
  const format = formats[formatType]

  return {
    dir: getOutputDir(formatType),
    generatedCode: 'es2015',
    format: format.module,
    sourcemap: true,
    preserveModules: true,
  }
}

export default [
  {
    input: { index: `index.${channel}.js` },
    plugins: getPlugins(),
    output: [
      getUnbundledOutputOptions(formats.es.selector),
      getUnbundledOutputOptions(formats.commonjs.selector),
    ],
  },
]
