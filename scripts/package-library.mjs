import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const SCRIPT_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIRECTORY = resolve(SCRIPT_DIRECTORY, "..");
const OUTPUT_DIRECTORY = resolve(PROJECT_DIRECTORY, "resources");

async function packageLibrary() {
  await mkdir(OUTPUT_DIRECTORY, { recursive: true });

  execFileSync(
    "npm",
    ["pack", "--ignore-scripts", "--pack-destination", OUTPUT_DIRECTORY],
    {
      cwd: PROJECT_DIRECTORY,
      stdio: "inherit",
    },
  );
}

packageLibrary().catch((error) => {
  process.stderr.write(`${String(error)}\n`);
  process.exitCode = 1;
});
