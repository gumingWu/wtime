import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unimport from 'unimport/unplugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unimport.vite({
      presets: [
        'vue',
        '@vueuse/core'
      ],
      dts: 'src/unimport.d.ts'
    })
  ],
})
