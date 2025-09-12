import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // development ke liye
  },
  build: {
    outDir: 'dist',
  },
  base: '/', // optional, agar deploy subpath pe nahi hai
})
