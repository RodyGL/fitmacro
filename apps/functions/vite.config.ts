import { resolve } from 'path';
import builtinModules from 'builtin-modules';
import { defineConfig } from 'vite';
import localPkg from './package.json';

const outDir = 'build';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...new Set([...builtinModules, ...Object.keys(localPkg.dependencies)]),
      ],
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        preserveModules: true,
        exports: 'named',
        format: 'cjs',
        dir: outDir,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      preserveEntrySignatures: 'strict',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
