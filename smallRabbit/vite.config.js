import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'; // 导入 path 模块

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle:"sass"})],//配置elementPlus采用sass样式配色系统
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 将@符号设置为src目录的绝对路径
    }
  },

  //elementPlus 主题覆盖导入 自动导入
  css:{
  preprocessorOptions:{
     scss:{
        additionalData:
          `@use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;`
  }

  }

  }


  }
)
