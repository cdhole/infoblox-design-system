// Map of PDS component slug -> Figma node URL.
// File: https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS/Component-Library-v2.5
// Components were enumerated via the Figma MCP search_design_system API.
// Update node-id values once each component frame's node ID is confirmed.

const FILE = 'https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS/Component-Library-v2.5';

// node-id values are placeholders. 1-23 was the entry node in the original brief.
const NODES: Record<string, string> = {
  // Section 1 — Actions
  'button':                   '1-23',
  'iq-button':                '1-24',
  'action-buttons':           '1-25',
  'single-button-toggle':     '1-26',
  'two-button-toggle':        '1-27',
  'grouped-toggle':           '1-28',
  'icon-toggle':              '1-29',
  'filter-chip-group':        '1-30',

  // Section 2 — Inputs
  'input':                    '1-31',
  'checkbox':                 '1-32',
  'radio':                    '1-33',
  'column-selector':          '1-34',

  // Section 3 — Containers
  'card':                     '1-35',
  'accordion':                '1-36',
  'accordion-header':         '1-37',
  'section-separator':        '1-38',
  'panel-separator':          '1-39',
  'header-row':               '1-40',
  'modal':                    '1-41',

  // Section 4 — Navigation
  'page-level-tabs':          '1-42',
  'slideout-tabs':            '1-43',
  'tab-bar-template':         '1-44',
  'menu-list':                '1-45',
  'perspective-nav':          '1-46',
  'perspective-panel-header': '1-47',
  'extended-panel-sidenav':   '1-48',

  // Section 5 — Notifications
  'notification-widget':      '1-49',
  'notification-icons':       '1-50',
  'network-notification-card':'1-51',
  'search-results-card':      '1-52',
};

export function figmaUrlFor(slug: string): string {
  const node = NODES[slug];
  return node ? `${FILE}?node-id=${node}` : FILE;
}

export const FIGMA_FILE_URL = FILE;
