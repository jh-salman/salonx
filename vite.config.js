import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/salonx-livelink/',  // Set base to your project name
  plugins: [react()],
})
