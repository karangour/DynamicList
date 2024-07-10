import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';

export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      // configuration options
      fileRegex: /.js$|.jsx$|.ts$|.tsx$/,
    })
  ],
  resolve: {
    alias: {
      'react-virtualized': 'react-virtualized/dist/es/index.js',
    },
    extensions: ['.js', '.jsx']
  },
  optimizeDeps: {
    include: ['axios'],
    exclude: ['react-virtualized']
  }
});
