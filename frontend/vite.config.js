import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',  // Set the root to the frontend folder
  build: {
    outDir: 'dist',  // Output directory for the build
  },
  server: {
    open: true, // Automatically open the app in the browser
    proxy: {
      '/api': 'http://localhost:5000', // Proxy setup for backend
    },
  },
});
