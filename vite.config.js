import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração padrão do Vite para projetos React + Tailwind
export default defineConfig({
  plugins: [react()],
});
