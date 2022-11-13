import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-dts';

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'webrtcexternal',
      fileName: (format) => `webrtcexternal.${format}.js`,
    },
    rollupOptions: {
    }
  },
  plugins: [dts()],
});
 