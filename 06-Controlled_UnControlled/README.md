# 🚀 React + Vite Deployment Guide

This is a **step-by-step deployment guide** for a React project built with **Vite + React Router + TailwindCSS**, including **ProtectedRoute** setup and deployment to **Vercel & Netlify**.

---

## 1️⃣ Vite Configuration (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // React Router fallback during dev
  },
  build: {
    outDir: 'dist', // production-ready folder
  },
  base: '/', // root path
})
