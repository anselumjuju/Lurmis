import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import process from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
});
