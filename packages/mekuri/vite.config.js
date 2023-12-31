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
         external: ["react"],
         output: {
            dir: "./build",
            globals: {
               react: "React",
            },
         },
      },
      sourcemap: true,
   },
});
