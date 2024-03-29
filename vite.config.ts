import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: 'mocks',
        replacement: path.resolve(__dirname, 'src/mocks'),
      },
      {
        find: 'pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: 'services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      {
        find: 'layouts',
        replacement: path.resolve(__dirname, 'src/layouts'),
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
      {
        find: 'stories',
        replacement: path.resolve(__dirname, 'src/stories'),
      },
      {
        find: 'styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: 'types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
    ],
  },
});
