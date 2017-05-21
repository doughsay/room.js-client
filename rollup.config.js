import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    json(),

    babel(),

    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      include: 'node_modules/**'
    }),

    uglify()
  ],
  dest: 'dist/js/bundle.js',
  moduleName: 'bundle'
}
