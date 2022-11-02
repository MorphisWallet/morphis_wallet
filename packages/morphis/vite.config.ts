import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, '/src/components'),
      '@assets': resolve(__dirname, '/src/assets'),
      '@pages': resolve(__dirname, '/src/pages'),
    },
  },
  plugins: [react()],
})
