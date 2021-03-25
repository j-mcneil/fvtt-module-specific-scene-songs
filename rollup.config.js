// rollup.config.js
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/single-scene-song.js',
    format: 'es',
  },
  plugins: [
    typescript(),
    copy({
      targets: [{ src: 'src/lang/**/*', dest: 'dist/lang' }],
    }),
  ],
};
