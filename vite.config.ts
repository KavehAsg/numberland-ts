import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ],
  resolve : {
    alias : {
      '@' : '/src',
      '@components' : '/src/components',
      '@assets' : '/src/assets',
      '@hooks' : '/src/hooks',
      '@utils' : '/src/utils',
      '@context' : '/src/context',
      '@pages' : '/src/pages',
      '@styles' : '/src/styles',
      '@constants' : '/src/constants',
      '@types' : '/src/types',
      '@services' : '/src/services',
      '@store' : '/src/store',
      '@routes' : '/src/routes',
      '@config' : '/src/config',
      '@api' : '/src/api',
      '@lib' : '/src/lib',
      '@middleware' : '/src/middleware',
    }
  }
})
