import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Smart-Search-Generator/',
  plugins: [react()],
  root: '.',
  server: {
    port: 3000
  }
});
