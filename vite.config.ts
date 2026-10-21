import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

const SRC_DIRECTORY = fileURLToPath(new URL("./src/", import.meta.url));
const LIBS_DIRECTORY = fileURLToPath(new URL("./src/libs/", import.meta.url));
const OUTPUT_DIRECTORY = fileURLToPath(new URL("./dist/", import.meta.url));
const TYPESCRIPT_CONFIG = fileURLToPath(
  new URL("./tsconfig.types.json", import.meta.url),
);

const ALIASES = [
  {
    find: /^@presentation$/,
    replacement: `${LIBS_DIRECTORY}presentation/index.ts`,
  },
  {
    find: /^@presentation\//,
    replacement: `${LIBS_DIRECTORY}presentation/`,
  },
  {
    find: /^@aplicacion$/,
    replacement: `${LIBS_DIRECTORY}aplicacion/index.ts`,
  },
  {
    find: /^@aplicacion\//,
    replacement: `${LIBS_DIRECTORY}aplicacion/`,
  },
  {
    find: /^@domain$/,
    replacement: `${LIBS_DIRECTORY}domain/index.ts`,
  },
  {
    find: /^@domain\//,
    replacement: `${LIBS_DIRECTORY}domain/`,
  },
  {
    find: /^@infraestructura$/,
    replacement: `${LIBS_DIRECTORY}infraestructura/index.ts`,
  },
  {
    find: /^@infraestructura\//,
    replacement: `${LIBS_DIRECTORY}infraestructura/`,
  },
  {
    find: /^@assets\//,
    replacement: `${SRC_DIRECTORY}assets/`,
  },
  {
    find: /^@\//,
    replacement: SRC_DIRECTORY,
  },
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: SRC_DIRECTORY,
      outDirs: [OUTPUT_DIRECTORY],
      tsconfigPath: TYPESCRIPT_CONFIG,
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    alias: ALIASES,
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      name: "ReactUI",
      formats: ["es", "cjs"],
      fileName: (format): string =>
        format === "es" ? "index.js" : "index.cjs",
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});