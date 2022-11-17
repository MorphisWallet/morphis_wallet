import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, '/src/assets'),
      '@components': resolve(__dirname, '/src/components'),
      '@core': resolve(__dirname, '/src/core'),
      '@layouts': resolve(__dirname, '/src/layouts'),
      '@pages': resolve(__dirname, '/src/pages'),
      '@shared': resolve(__dirname, '/src/shared'),
      '@src': resolve(__dirname, '/src'),
    },
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
})
