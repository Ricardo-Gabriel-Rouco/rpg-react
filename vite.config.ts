// vite.config.js
import { resolve } from 'path'
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'RPGreact',
      // the proper extensions will be added
      fileName: 'rpg-react',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          "react-dom": 'ReactDom',
          "react/jsx-runtime": "react/jsx-runtime" 
        },
      },
    },
  },
})