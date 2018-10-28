import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
  input: 'index.js',
  output: [
    {
      file: 'cjs.js',
      format: 'cjs'
    },
    {
      file: 'esm.js',
      format: 'esm'
    },
    {
      file: 'iife.js',
      format: 'iife',
      name: 'happycat.css'
    }
  ],

  plugins: [
    nodeResolve(),
    commonjs()
  ]
}]
