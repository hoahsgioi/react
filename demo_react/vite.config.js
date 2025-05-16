import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add this to help with potential JSX parsing issues
      jsxRuntime: 'automatic',
      babel: {
        babelrc: false,
        configFile: false,
      }
    })
  ],
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
