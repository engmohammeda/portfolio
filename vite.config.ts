import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // GitHub Pages project site is served from /portfolio/.
  // The dev server (and any preview host) serves from the root for convenience.
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Allow sandbox/preview hosts (Vite blocks unknown Host headers by default).
    allowedHosts: ['.e2b.app', '.arena.ai', 'localhost'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['.e2b.app', '.arena.ai', 'localhost'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));
