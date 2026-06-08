# Project memory for Claude

Rules that apply to all sessions on this project.

## Images — always downscale before reading

The Anthropic API rejects images larger than 2000 pixels on the longer edge
when a response contains multiple images. The user gets a noisy error and the
image is dropped. Avoid this without exception.

**Whenever fetching a screenshot (Figma MCP, web, local PNG) larger than the
canvas the user is looking at — downscale first, then Read.**

The reliable pattern (works on this Windows machine; `pngjs` is installed in
the project's node_modules):

```bash
node -e "
const fs = require('fs');
const { PNG } = require('pngjs');
const src = PNG.sync.read(fs.readFileSync('PATH_TO_SOURCE.png'));
const W = src.width, H = src.height;
const maxDim = 1100;             // safe budget; well under 2000
const scale = Math.min(maxDim / W, maxDim / H, 1);
const dw = Math.floor(W * scale), dh = Math.floor(H * scale);
const out = new PNG({ width: dw, height: dh });
for (let y = 0; y < dh; y++) {
  for (let x = 0; x < dw; x++) {
    const sx = Math.floor(x / scale), sy = Math.floor(y / scale);
    const si = (sy * W + sx) * 4, di = (y * dw + x) * 4;
    out.data[di]   = src.data[si];
    out.data[di+1] = src.data[si+1];
    out.data[di+2] = src.data[si+2];
    out.data[di+3] = 255;
  }
}
fs.writeFileSync('PATH_TO_OUTPUT.png', PNG.sync.write(out));
"
```

Then `Read PATH_TO_OUTPUT.png`. Never `Read` a PNG that was just downloaded
from Figma MCP `get_screenshot` at high resolution — they're routinely
4000–20000 px wide.

For Figma MCP `get_screenshot`, cap `maxDimension` at **1024** when the only
goal is visual inspection. Use higher values only when you need to crop or
sample pixels client-side, and never `Read` that high-res file directly.

## Environment quirk — OneDrive vs. Angular dev server

This project lives inside the user's `OneDrive` folder. OneDrive's sync
process holds file locks on the `.angular/cache/vite/deps` directory, which
makes the Angular dev server crash with `EPERM: rmdir` whenever Vite tries to
re-optimize dependencies.

**Fix already in place:** the `.angular` directory is a Windows junction
pointing to `C:\Users\cdhole\AppData\Local\Temp\ibx-angular-cache`. Do not
delete or recreate `.angular` as a regular folder.

If the junction breaks:

```bash
cd "C:/Users/cdhole/OneDrive - Infoblox Inc/Documents/Design/_Projects/infoblox-design-system"
rm -rf .angular   # this removes the junction, not its target
mkdir -p "C:/Users/cdhole/AppData/Local/Temp/ibx-angular-cache"
cmd //c "mklink /J .angular C:\Users\cdhole\AppData\Local\Temp\ibx-angular-cache"
```

## Dev server

Always use the Claude Preview MCP `preview_start` with name `ibx-ds` — config
is in `.claude/launch.json`. It runs `npm start -- --port=4200`.

## Project structure

- `src/app/pages/landing/` — landing page (3 tiles: PDS, ADS, xDS)
- `src/app/pages/pds/` — Pegasus DS shell + components + foundations
- `src/app/pages/ads/` — Aurora DS shell + components
- `src/app/pages/placeholder/` — xDS uses this; IQ was removed
- `src/app/ui-pds/` — real Angular component implementations used in live previews
- `src/app/shared/` — `PageTocComponent`, `CodeBlockComponent`, etc.

**Do not re-add an IQ design system** unless the user explicitly asks. It
was removed deliberately on 2026-06-08 — the IQ Figma references kept
shifting and the work was paused.

## Tokens

Per-DS accents in `src/styles.scss`:
- `--pds-accent: #0070d2` (Pegasus blue)
- `--ads-accent: #0099d2` (Aurora cloud blue)
- `--xds-accent: #f47c20` (Axur orange)
- Brand: `--ibx-navy #003a70`, `--ibx-brand-red #e2231a`, `--ibx-green #00b388`, `--ibx-black #000`

## Coding conventions

- Angular 18, standalone components, SCSS
- Component files end with `.component.ts` and live alongside their styles inline
- Per-DS sidebar manifests in `*-components.ts` are the single source of truth
- When a Figma file has authored descriptions, sync them via the Figma MCP
  into `PDS_FIGMA_DOCS` / `ADS_FIGMA_DOCS` maps — do not hand-author docs
  unless the Figma description field is empty
