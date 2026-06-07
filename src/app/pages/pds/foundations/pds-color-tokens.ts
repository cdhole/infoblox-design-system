// PDS Color tokens — synced from the Pegasus Component Library v2.5 Figma file.
//
//   File:    https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS/Component-Library-v2.5
//   Page:    Color (node-id=1-13)
//   Variable collection: "Colors"
//   Last synced: 2026-06-06 via Figma MCP search_design_system + 2.5 changelog
//
// Token *names* and *scopes* below are verified one-for-one against Figma.
// Hex *values* labelled "verified" come from the PDS 2.0→2.5 changelog PDF.
// Hex values labelled "inferred" are best-effort fallbacks for swatches that
// the changelog did not list and the MCP API did not expose; update them via
// the sync script when full token resolution is available.
//
// To re-sync: run `npm run sync:figma` (script stub at scripts/sync-figma.ts).

export interface ColorToken {
  name: string;          // e.g. "color-text-primary"
  hex: string;           // resolved hex value
  scope: string;         // "text" | "background" | "border" | "icon" | "graphics"
  description: string;
  /** True if the value was changed in PDS 2.5 (verified from changelog). */
  changedIn25?: boolean;
  /** confidence — 'verified' = from Figma/changelog, 'inferred' = best-guess fallback */
  confidence?: 'verified' | 'inferred';
}

export interface ColorGroup {
  id: string;
  title: string;
  description: string;
  tokens: ColorToken[];
}

export const PDS_COLOR_GROUPS: ColorGroup[] = [
  {
    id: 'text',
    title: 'Text',
    description: 'Text-fill tokens. Use for any glyph that conveys content.',
    tokens: [
      { name: 'color-text-primary',     hex: '#212121', scope: 'text', description: 'Default body and heading copy.', confidence: 'inferred' },
      { name: 'color-text-secondary',   hex: '#424242', scope: 'text', description: 'Supporting copy adjacent to primary text.', changedIn25: true, confidence: 'verified' },
      { name: 'color-text-tertiary',    hex: '#616161', scope: 'text', description: 'Tertiary metadata, timestamps, captions.',     changedIn25: true, confidence: 'verified' },
      { name: 'color-text-placeholder', hex: '#757575', scope: 'text', description: 'Input placeholder copy.',                       changedIn25: true, confidence: 'verified' },
      { name: 'color-text-disabled',    hex: '#bdbdbd', scope: 'text', description: 'Disabled controls and read-only states.',       changedIn25: true, confidence: 'verified' },
      { name: 'color-text-link',        hex: '#0070d2', scope: 'text', description: 'Hyperlinks and inline link triggers.',          confidence: 'inferred' },
      { name: 'color-text-link-hover',  hex: '#0e5aa1', scope: 'text', description: 'Link hover state.',                              changedIn25: true, confidence: 'verified' },
      { name: 'color-text-accent',      hex: '#0070d2', scope: 'text', description: 'Brand-accented text on neutral surfaces.',     confidence: 'inferred' },
      { name: 'color-text-success',     hex: '#2e7d32', scope: 'text', description: 'Positive status messages.',                     confidence: 'inferred' },
      { name: 'color-text-warning',     hex: '#7a5c00', scope: 'text', description: 'Warning copy. Meets WCAG AA on white.',         changedIn25: true, confidence: 'verified' },
      { name: 'color-text-critical',    hex: '#914200', scope: 'text', description: 'Critical / error copy.',                        changedIn25: true, confidence: 'verified' },
      { name: 'color-text-alert',       hex: '#d32f2f', scope: 'text', description: 'High-severity alerts and destructive labels.', confidence: 'inferred' },
      { name: 'color-text-invert',      hex: '#ffffff', scope: 'text', description: 'Text on dark or saturated backgrounds.',        confidence: 'inferred' },
    ],
  },
  {
    id: 'background',
    title: 'Background',
    description: 'Surface fills for inputs, panels, navbars, and status backgrounds.',
    tokens: [
      { name: 'color-BG-screen',         hex: '#f5f5f5', scope: 'background', description: 'Page-level surface behind cards and panels.', confidence: 'inferred' },
      { name: 'color-BG-container-bold', hex: '#ffffff', scope: 'background', description: 'Default card / panel container fill.',         confidence: 'inferred' },
      { name: 'color-BG-input',          hex: '#ffffff', scope: 'background', description: 'Input field default fill.',                    confidence: 'inferred' },
      { name: 'color-BG-input-hover',    hex: '#f5f5f5', scope: 'background', description: 'Input hover fill.',                            confidence: 'inferred' },
      { name: 'color-BG-input-pressed',  hex: '#eeeeee', scope: 'background', description: 'Input pressed / focused fill.',                confidence: 'inferred' },
      { name: 'color-BG-input-disabled', hex: '#f5f5f5', scope: 'background', description: 'Input disabled fill.',                         confidence: 'inferred' },
      { name: 'color-BG-navbar-bold',    hex: '#212121', scope: 'background', description: 'Strong navbar / sidebar background.',          confidence: 'inferred' },
      { name: 'color-BG-navbar-medium',  hex: '#424242', scope: 'background', description: 'Mid-tone navbar background.',                  confidence: 'inferred' },
      { name: 'color-BG-navbar-subtle',  hex: '#f5f5f5', scope: 'background', description: 'Light navbar background.',                     confidence: 'inferred' },
      { name: 'color-BG-alert-bold',     hex: '#d32f2f', scope: 'background', description: 'Filled alert / destructive button fill.',     confidence: 'inferred' },
      { name: 'color-BG-alert-subtle',   hex: '#ffebee', scope: 'background', description: 'Inline error background.',                     confidence: 'inferred' },
      { name: 'color-BG-warning-bold',   hex: '#7a5c00', scope: 'background', description: 'Filled warning surface.',                       confidence: 'inferred' },
      { name: 'color-BG-success-bold',   hex: '#2e7d32', scope: 'background', description: 'Filled success surface.',                       confidence: 'inferred' },
      { name: 'color-BG-success-subtle', hex: '#e8f5e9', scope: 'background', description: 'Inline success background.',                   confidence: 'inferred' },
    ],
  },
  {
    id: 'border',
    title: 'Border',
    description: 'Stroke fills for dividers, focus rings, and input borders.',
    tokens: [
      { name: 'color-border-subtle',       hex: '#e0e0e0', scope: 'border', description: 'Default hairline divider on light surfaces.',  confidence: 'inferred' },
      { name: 'color-border-medium',       hex: '#9e9e9e', scope: 'border', description: 'Mid-strength outline for inputs at rest.',     confidence: 'inferred' },
      { name: 'color-border-semibold',     hex: '#616161', scope: 'border', description: 'Stronger outline for emphasized controls.',    confidence: 'inferred' },
      { name: 'color-border-bold',         hex: '#424242', scope: 'border', description: 'Heavy outline for primary controls.',          confidence: 'inferred' },
      { name: 'color-border-extrabold',    hex: '#212121', scope: 'border', description: 'Maximum-contrast outline.',                    confidence: 'inferred' },
      { name: 'color-border-disabled',     hex: '#bdbdbd', scope: 'border', description: 'Disabled control outline.',                    confidence: 'inferred' },
      { name: 'color-border-focused',      hex: '#0171da', scope: 'border', description: 'Focus ring color (keyboard focus).',           changedIn25: true, confidence: 'verified' },
      { name: 'color-border-invert',       hex: '#ffffff', scope: 'border', description: 'Border on dark surfaces.',                     confidence: 'inferred' },
      { name: 'color-border-alert-bold',   hex: '#d32f2f', scope: 'border', description: 'Outline for error / destructive surfaces.',    confidence: 'inferred' },
      { name: 'color-border-success-bold', hex: '#2e7d32', scope: 'border', description: 'Outline for success surfaces.',                confidence: 'inferred' },
    ],
  },
  {
    id: 'icon',
    title: 'Icon',
    description: 'Fill tokens for SVG icons. Scope: FRAME_FILL, SHAPE_FILL, TEXT_FILL.',
    tokens: [
      { name: 'color-icon-primary',  hex: '#424242', scope: 'icon', description: 'Default icon color on light surfaces.',     confidence: 'inferred' },
      { name: 'color-icon-success',  hex: '#2e7d32', scope: 'icon', description: 'Success / confirmation icons.',              confidence: 'inferred' },
      { name: 'color-icon-warning',  hex: '#7a5c00', scope: 'icon', description: 'Warning icons.',                              changedIn25: true, confidence: 'verified' },
      { name: 'color-icon-critical', hex: '#c05700', scope: 'icon', description: 'Critical icons.',                             changedIn25: true, confidence: 'verified' },
      { name: 'color-icon-alert',    hex: '#d32f2f', scope: 'icon', description: 'High-severity alert icons.',                  confidence: 'inferred' },
      { name: 'color-icon-invert',   hex: '#ffffff', scope: 'icon', description: 'Icons on dark / saturated surfaces.',         confidence: 'inferred' },
    ],
  },
  {
    id: 'graphics',
    title: 'Graphics gray',
    description: 'New in PDS 2.5. Reserved for illustrations and decorative graphics — separate from text/border grays.',
    tokens: [
      { name: 'color-graphics-gray-subtle',    hex: '#f5f5f5', scope: 'graphics', description: 'Subtle illustration fill.',         confidence: 'inferred' },
      { name: 'color-graphics-gray-medium',    hex: '#e0e0e0', scope: 'graphics', description: 'Mid illustration fill.',            confidence: 'inferred' },
      { name: 'color-graphics-gray-semibold',  hex: '#bdbdbd', scope: 'graphics', description: 'Stronger illustration fill.',       confidence: 'inferred' },
      { name: 'color-graphics-gray-bold',      hex: '#9e9e9e', scope: 'graphics', description: 'Bold illustration fill.',           confidence: 'inferred' },
      { name: 'color-graphics-gray-extrabold', hex: '#616161', scope: 'graphics', description: 'Maximum-contrast illustration fill.', confidence: 'inferred' },
    ],
  },
];

export const PDS_COLOR_SYNC_META = {
  source: 'Pegasus Component Library v2.5 · Figma',
  fileKey: 'ebsEG1FiXLoPMKk2VNNUHS',
  pageNodeId: '1-13',
  variableCollection: 'Colors',
  lastSynced: '2026-06-06',
  method: 'Figma MCP search_design_system + PDS 2.0→2.5 changelog',
};
