import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 Προσθέτει σωστά το path για στατικά αρχεία
  plugins: [react()],
});
