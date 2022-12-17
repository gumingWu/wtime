import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unimport from 'unimport/unplugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    vue(),
    Unimport.vite({
      imports: [
        {
          from: 'dayjs',
          name: 'default',
          as: 'dayjs'
        }
      ],
      presets: [
        'vue',
        '@vueuse/core'
      ],
      dts: 'src/unimport.d.ts'
    })
  ],
})
