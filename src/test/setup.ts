import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

/**
 * @description Limpia el DOM y el almacenamiento despues de cada prueba.
 */
afterEach((): void => {
  cleanup();
  window.localStorage.clear();
});
