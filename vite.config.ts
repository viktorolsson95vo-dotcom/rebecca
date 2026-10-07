import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Two pages: Swedish (primary) at /, English at /en. Language comes from <html lang> in each.
// `vite build --ssr src/entry-server.tsx` builds the renderer used by scripts/prerender.mjs.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: {
            sv: resolve(import.meta.dirname, 'index.html'),
            en: resolve(import.meta.dirname, 'en/index.html'),
          },
        },
      },
}))
