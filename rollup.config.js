import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: [ '.js', '.css' ]
    }),
    commonjs({
      namedExports: {
        'node_modules/firebase/utils/shims.js': [ 'default' ]
      }
    })
  ]
};
