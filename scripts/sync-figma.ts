// scripts/sync-figma.ts
//
// Stub for syncing PDS token data from Figma.
//
// To wire up:
// 1. Create a Figma Personal Access Token (https://www.figma.com/developers/api#access-tokens)
//    and store it as FIGMA_TOKEN in your environment (or in a .env file).
// 2. Fill in fetchVariablesPublished() below — Figma's REST endpoints:
//    - GET /v1/files/:file_key/variables/published  → returns published variable values
//    - GET /v1/files/:file_key/variables/local      → if you own the file
// 3. Run `tsx scripts/sync-figma.ts` (or wire via npm script).
// 4. The script writes refreshed token files to src/app/pages/pds/foundations/.
//
// Add to package.json:
//   "scripts": { "sync:figma": "tsx scripts/sync-figma.ts" }
//
// CI: trigger this script from a GitHub Action on Figma's library-publish webhook.

const FILE_KEY = 'ebsEG1FiXLoPMKk2VNNUHS';
const TOKEN = process.env['FIGMA_TOKEN'];

interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN';
  valuesByMode: Record<string, any>;
}

async function fetchVariablesPublished(): Promise<FigmaVariable[]> {
  if (!TOKEN) {
    console.error('FIGMA_TOKEN env var is required.');
    process.exit(1);
  }
  const res = await fetch(
    `https://api.figma.com/v1/files/${FILE_KEY}/variables/published`,
    { headers: { 'X-Figma-Token': TOKEN } as any },
  );
  if (!res.ok) {
    throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  }
  const json: any = await res.json();
  // Figma returns { meta: { variables: { id -> {...} } } }
  return Object.values(json.meta?.variables ?? {});
}

function rgbToHex(r: number, g: number, b: number): string {
  const c = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

async function main() {
  console.log(`Fetching variables for file ${FILE_KEY}…`);
  const variables = await fetchVariablesPublished();
  console.log(`Got ${variables.length} variables.`);

  // Filter to Colors collection, map names + resolved hex.
  // (Implementation left as exercise — Figma returns RGBA floats in valuesByMode.)
  // …
  // Write refreshed pds-color-tokens.ts file.
  console.log('TODO: serialize and write refreshed token files.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
