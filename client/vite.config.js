import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [],
      },
      // 👇 This disables lightningcss
      fastRefresh: true,
      jsxImportSource: 'react',
      include: '**/*.jsx',
      exclude: /node_modules/,
    }),
  ],
  css: {
    postcss: {}, // fallback to postcss instead of lightningcss
  },
});
