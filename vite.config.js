import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/one-challenge-aluraflix/',
  resolve: {
    alias: {
      '@api': '/src/api',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@images': '/src/assets/images',
      '@store': '/src/store',
      '@ui': '/src/ui',
      '@videoGallery': '/src/video-gallery'
    }
  }
})
