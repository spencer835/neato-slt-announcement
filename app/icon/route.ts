import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const iconPath = join(process.cwd(), "public", "brand", "neato-icon.svg");
  const icon = await readFile(iconPath, "utf8");

  return new Response(icon, {
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
