// rollup.config.js
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/specific-scene-songs.js',
    format: 'es',
  },
  plugins: [
    typescript({}),
    copy({
      targets: [{ src: 'src/lang/**/*', dest: 'dist/lang' }],
    }),
    resolve(),
  ],
};
