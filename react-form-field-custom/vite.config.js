import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  const config = defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
    ],
  });

  return config;
});
