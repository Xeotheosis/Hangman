import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://xeotheosis.github.io/Hangman/",
  plugins: [react()],
})
