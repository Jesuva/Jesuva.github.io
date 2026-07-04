import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root-level user/organization GitHub Pages site (Jesuva.github.io) is served
// from the repository root, so the app must be built with base: '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
