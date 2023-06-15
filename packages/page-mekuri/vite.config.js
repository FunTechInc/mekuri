import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
   root: "src",
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.js"),
         name: "pagemekuri",
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
