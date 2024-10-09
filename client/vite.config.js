import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */)},
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/}),
  ],
  build: {
    // The directory where your Node.js app will serve static files from
    outDir: path.resolve(__dirname, 'dist'), 
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    proxy: {
      // Proxy API requests to your Node.js server
      '/api': 'http://localhost:5000', // Assuming Node.js runs on port 5000
    },
  },
})
