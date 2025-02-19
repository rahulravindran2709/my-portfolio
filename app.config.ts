// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  tsr: {
    appDirectory:'./src/app'
  },
  vite: {
    resolve: {
      alias: {
        "@/cn": path.resolve(__dirname, "./src/utils/cn.ts"),
        "@/components": path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
});
