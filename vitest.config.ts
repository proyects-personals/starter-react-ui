import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const SRC_DIRECTORY = fileURLToPath(new URL("./src", import.meta.url));
const LIBS_DIRECTORY = fileURLToPath(new URL("./src/libs", import.meta.url));

/**
 * @description Configuracion de pruebas unitarias de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@presentation": `${LIBS_DIRECTORY}/presentation/index.ts`,
      "@aplicacion": `${LIBS_DIRECTORY}/aplicacion/index.ts`,
      "@domain": `${LIBS_DIRECTORY}/domain/index.ts`,
      "@infraestructura": `${LIBS_DIRECTORY}/infraestructura/index.ts`,
      "@": SRC_DIRECTORY,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    css: false,
  },
});
