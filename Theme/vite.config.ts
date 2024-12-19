import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/styles/variables";` // Exemplo de como importar variáveis globalmente
      }
    }
  }
});