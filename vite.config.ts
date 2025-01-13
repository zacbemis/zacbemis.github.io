import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zacbemis.github.io/',
  build: {
    outDir: 'dist'
  }
})