import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: 'MyBundle'
  },
  plugins: [
    eslint({
      throwOnError: true,
      include: ['src/**/*.js'],
      fix: true,
    }),
    resolve(),
    commonjs(),
    // babel({
    //   babelHelpers: 'bundled',  // Помогает Babel включить runtime в бандл
    //   exclude: 'node_modules/**'  // Исключаем node_modules из обработки Babel
    // })
  ]
};
