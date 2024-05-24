import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
   root: "src",
   build: {
      lib: {
         entry: {
            main: path.resolve(__dirname, "src/index.js"),
         },
         name: "mekuri",
         fileName: "mekuri",
      },
      rollupOptions: {
         external: ["react", "react-dom"],
         output: {
            dir: "./build",
            globals: {
               react: "React",
               "react-dom": "ReactDOM",
            },
         },
      },
      sourcemap: true,
   },
});
