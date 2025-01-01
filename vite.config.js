import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // 加載環境變數
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/mini_app_test/',
    define: {
      // 明確定義環境變數，確保構建時可用
      'import.meta.env.VITE_LIFF_ID': JSON.stringify(env.VITE_LIFF_ID)
    }
  }
}) 