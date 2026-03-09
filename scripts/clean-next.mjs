import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const dirs = [".next-cache", ".next"];

for (const dir of dirs) {
  const target = resolve(process.cwd(), dir);
  if (!existsSync(target)) continue;

  try {
    rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  } catch (error) {
    console.warn(`Could not remove ${dir}:`, error.message);
  }
}
