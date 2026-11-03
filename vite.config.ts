
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: '/Portfolioforgraphicdesigner/',

  plugins: [react(), tailwindcss()],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',

      'figma:asset/dff9deed159c10ff39a7986d339e36135ec2a8dc.png':
        path.resolve(__dirname, './src/assets/dff9deed159c10ff39a7986d339e36135ec2a8dc.png'),

      'figma:asset/6107f87a0c932a3ae898809e94b332eb6ca45fe5.png':
        path.resolve(__dirname, './src/assets/6107f87a0c932a3ae898809e94b332eb6ca45fe5.png'),

      'figma:asset/14c3aa15315c95a218e92e58a564a27862051855.png':
        path.resolve(__dirname, './src/assets/14c3aa15315c95a218e92e58a564a27862051855.png'),

      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
  },

  server: {
    port: 3000,
    open: true,
  },
});
