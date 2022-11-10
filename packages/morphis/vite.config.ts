import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, '/src/components'),
      '@assets': resolve(__dirname, '/src/assets'),
      '@pages': resolve(__dirname, '/src/pages'),
      '@layouts': resolve(__dirname, '/src/layouts'),
      '@core': resolve(__dirname, '/src/core'),
    },
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
})
