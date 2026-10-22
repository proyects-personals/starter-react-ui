import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import process from "node:process";

const SCRIPT_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIRECTORY = resolve(SCRIPT_DIRECTORY, "..");
const OUTPUT_DIRECTORY = resolve(PROJECT_DIRECTORY, "resources");
const NPM_EXECUTABLE = process.platform === "win32" ? "npm.cmd" : "npm";

/**
 * @description Empaqueta la librería para su distribución.
 * @author Steveen Cues
 * @version 1.1.0
 */
async function packageLibrary() {
  await mkdir(OUTPUT_DIRECTORY, { recursive: true });

  const npmCliPath = process.env.npm_execpath;

  if (npmCliPath) {
    execFileSync(
      process.execPath,
      [
        npmCliPath,
        "pack",
        "--ignore-scripts",
        "--pack-destination",
        OUTPUT_DIRECTORY,
      ],
      {
        cwd: PROJECT_DIRECTORY,
        stdio: "inherit",
      },
    );

    return;
  }

  execFileSync(
    NPM_EXECUTABLE,
    ["pack", "--ignore-scripts", "--pack-destination", OUTPUT_DIRECTORY],
    {
      cwd: PROJECT_DIRECTORY,
      stdio: "inherit",
      shell: process.platform === "win32",
    },
  );
}

packageLibrary().catch((error) => {
  process.stderr.write(`${String(error)}\n`);
  process.exitCode = 1;
});
