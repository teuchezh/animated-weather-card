import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import { readFileSync } from 'fs';

// Read version from package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/dynamic-weather-card.js',
    format: 'es',
    sourcemap: false
  },
  plugins: [
    replace({
      __VERSION__: JSON.stringify(pkg.version),
      preventAssignment: true
    }),
    resolve(),
    terser({
      format: {
        comments: false
      },
      compress: {
        drop_console: false
      }
    })
  ]
};
