import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig(({ mode, command }) => {
  const isLocal = mode === 'dev' && command === 'serve';
  return defineConfig({
    base: '/',
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: false,
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