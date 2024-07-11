import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*",},
      { find: "@table", replacement: "/src/components/table/index.jsx",},
      { find: "@modal", replacement: "/src/components/modal/index.jsx",},
    ],
}
})