import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'zephyrvpn-website',  // Set this to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});