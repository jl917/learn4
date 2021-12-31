import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig(({ mode, command }) => {
  const isLocal = mode === 'dev' && command === 'serve';
  return defineConfig({
    root: './src',
    build: {
      outDir: '../dist/client',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      replace({
        'window.IS_LOCAL': JSON.stringify(isLocal),
      }),
    ],
  })
});