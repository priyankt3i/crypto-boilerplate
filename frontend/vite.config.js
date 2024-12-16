import { defineConfig } from 'vite';

export default defineConfig({
  root: './',  // Ensure Vite looks at the root directory for the index.html file
  build: {
    outDir: 'dist',  // Specify the output directory for your build files (optional)
  },
  server: {
    open: true,  // Automatically open the app in the browser
    proxy: {
      '/api': 'http://localhost:5000', // Example: proxy backend requests to the server
    },
  },
});
