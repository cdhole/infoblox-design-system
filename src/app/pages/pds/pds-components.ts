// PDS sidebar mirrors the Pegasus Component Library v2.5 Figma file.
// Page names + node IDs were captured directly from the file via the Figma MCP
// metadata API on 2026-06-06. Each entry's `figmaUrl` is a true deep link to
// the corresponding Figma page.

export const PDS_FIGMA_FILE = 'ebsEG1FiXLoPMKk2VNNUHS';
const FILE_URL = `https://www.figma.com/design/${PDS_FIGMA_FILE}/Component-Library-v2.5`;

export interface PdsComponent {
  /** URL slug for routing. */
  slug: string;
  /** Display name shown in sidebar and page hero (matches Figma page name). */
  name: string;
  /** Verified Figma node-id, encoded as "N-M" for the URL. */
  nodeId: string;
  /** Structured info pulled from the Figma component's "description" field via MCP. */
  figmaDoc?: FigmaDoc;
}

/** Parsed sections extracted from a Figma component description. */
export interface FigmaDoc {
  /** Plain summary sentence. */
  summary?: string;
  /** "When to use" guidance. */
  whenToUse?: string;
  /** "When not to use" guidance. */
  whenNotToUse?: string;
  /** Bulleted property list: [name, type, notes] */
  properties?: { name: string; type?: string; notes?: string }[];
  /** Bulleted state list. */
  states?: string[];
  /** Accessibility notes. */
  accessibility?: string;
  /** Angular selector string. */
  selector?: string;
  /** Any extra notes / rules. */
  rules?: string[];
}

/**
 * Figma docs captured from the Figma MCP `search_design_system` description
 * field. Only components with prose in the Figma file appear here; everything
 * else falls back to the live iframe.
 *
 * Last synced: 2026-06-06.
 */
export const PDS_FIGMA_DOCS: Record<string, FigmaDoc> = {
  buttons: {
    summary: 'Interactive action trigger. Use buttons to allow users to take actions and make choices with a single tap or click.',
    whenToUse: 'Place in toolbars, dialogs, forms, and cards. Use Primary for the single dominant action per view. Use Secondary for alternative actions. Use Tertiary for low-emphasis actions. Use Success/Danger sparingly for contextual confirmation or destructive actions. Use Link for inline navigational triggers.',
    properties: [
      { name: 'Type',  type: 'Primary | Secondary | Tertiary | Success | Danger | Link' },
      { name: 'State', type: 'Normal | Hover | Pressed | Focused/Active | Disabled' },
      { name: 'Label', type: 'string', notes: 'Button text (default: "Button")' },
      { name: 'show-left-icon',  type: 'boolean', notes: 'Show/hide left icon slot' },
      { name: 'show-right-icon', type: 'boolean', notes: 'Show/hide right icon slot' },
      { name: 'show-label',      type: 'boolean', notes: 'Show/hide label text' },
      { name: 'left-icon',  type: 'IconName',  notes: 'Icon instance (left slot)' },
      { name: 'right-icon', type: 'IconName',  notes: 'Icon instance (right slot)' },
      { name: 'Dropdown Button',     type: 'boolean', notes: 'Caret-down for split/dropdown triggers' },
      { name: 'Multi Action Button', type: 'boolean', notes: 'Divider + caret for multi-action patterns' },
    ],
    states: ['Normal', 'Hover', 'Pressed', 'Focused/Active', 'Disabled'],
    accessibility: 'role="button", aria-disabled on Disabled state, tabindex="0", keyboard: Enter/Space to activate, aria-label when icon-only.',
    selector: '<ads-button>',
  },

  'text-fields': {
    summary: 'A single-line text input used to capture user-entered values in forms. Supports 9 interaction states and two label orientations (Vertical Stack and Horizontal Stack).',
    properties: [
      { name: 'Show Label',     type: 'boolean', notes: 'Toggle the label above/beside the field' },
      { name: 'Mandatory',      type: 'boolean', notes: 'Show a red asterisk (*) to mark required fields' },
      { name: 'Helper Text',    type: 'boolean', notes: 'Show a secondary hint message below the field' },
      { name: 'Show Error Helper', type: 'boolean', notes: 'Show error message below in Error state' },
      { name: 'Inline Edit',    type: 'boolean', notes: 'Show Check/Cross action buttons beside the field' },
    ],
    rules: [
      'Password support: Use Masked / Unmasked / Masked Disabled states for password inputs.',
    ],
  },

  checkbox: {
    summary: 'A binary input control for independently toggling one or more options within a set.',
    whenToUse: 'Use when multiple options can be selected simultaneously and each is independent. Use the Indeterminate type when a parent checkbox represents a group whose children are partially selected — toggling it selects all children.',
    whenNotToUse: 'Use Radio Button for single-select from a group. Use Toggle for a standalone on/off setting that takes immediate effect.',
    rules: [
      'Do not combine Indeterminate + Disabled — a partially-selected group that is non-interactive is not a valid product state.',
      'When used with helper text, error messages, or a field-level label, place inside a Form Field component.',
    ],
    accessibility: 'role="checkbox". aria-checked="true" (Checked), "false" (Unchecked), "mixed" (Indeterminate). aria-disabled="true" when Disabled. Space key toggles. A visible Label or aria-label is always required.',
    selector: '<ads-checkbox>',
    properties: [
      { name: 'checked',      type: 'boolean',  notes: 'Current selection state' },
      { name: 'indeterminate', type: 'boolean', notes: 'Partial group state' },
      { name: 'disabled',     type: 'boolean' },
      { name: 'label',        type: 'string' },
      { name: 'checkedChange', type: 'event' },
    ],
  },

  accordion: {
    summary: 'Disclosure container. Shows or hides a block of content under a collapsible header, reducing cognitive load on information-dense surfaces.',
    properties: [
      { name: 'Expanded', type: 'True | False' },
      { name: 'Content',  type: 'Slot', notes: 'Accepts any child component, typically an Accordion Header variant' },
    ],
    whenToUse: 'When grouping related content into independently expandable sections reduces cognitive load (settings panels, filter groups, reference docs).',
    whenNotToUse: 'When all sections are likely expanded simultaneously, or when hidden content is critical and must not require user action to reveal.',
    accessibility: 'aria-expanded="true" when Expanded=True, "false" otherwise. Keyboard: Enter / Space to toggle (handled via the header trigger).',
  },

  'accordion-header': {
    summary: 'Disclosure trigger control. Clickable header that toggles the visibility of an associated accordion panel.',
    properties: [
      { name: 'Type',  type: 'Label Only | Label + Count | Label + Action | Label + Info' },
      { name: 'State', type: 'Collapsed | Expanded' },
      { name: 'Theme', type: 'Light' },
    ],
    rules: [
      'Anatomy: Container · Primary label · Optional count / action / info · Directional caret.',
    ],
    accessibility: 'role="button". aria-expanded="true" when panel is open. Keyboard: Enter / Space to toggle.',
    whenToUse: 'As the trigger element in an accordion composition, paired with a panel body.',
    whenNotToUse: 'As a standalone heading or section title outside an accordion.',
  },

  'status-badges': {
    summary: 'Lifecycle state label. Communicates whether an issue, alert, or record is currently open or has been resolved.',
    properties: [
      { name: 'Status', type: 'Active | Resolved' },
      { name: 'Theme',  type: 'Light | Dark' },
      { name: 'Bg',     type: 'Default | Highlighted' },
    ],
    rules: [
      'Anatomy: Label chip with uppercase status text.',
    ],
    whenToUse: 'In issue trackers, alert tables, and security dashboards to distinguish open from closed items.',
    whenNotToUse: 'Highlighted background in dense tables, where the amplified treatment would create visual noise.',
    accessibility: 'role="status". aria-label="Status: Active" or "Status: Resolved".',
  },
};


export interface PdsSection {
  id: string;
  title: string;
  components: PdsComponent[];
}

export const PDS_SECTIONS: PdsSection[] = [
  {
    id: 'foundations',
    title: '1 · Foundations',
    components: [
      { slug: 'color',         name: 'Color',                      nodeId: '1-13' },
      { slug: 'typography',    name: 'Typography',                 nodeId: '1-14' },
      { slug: 'spacing',       name: 'Spacing & Corner Radius',    nodeId: '104-5133' },
      { slug: 'elevations',    name: 'Elevations',                 nodeId: '104-5141' },
      { slug: 'grid',          name: 'Grid',                       nodeId: '1-11' },
      { slug: 'icons',         name: 'Icons',                      nodeId: '1-12' },
      { slug: 'logo',          name: 'Logo',                       nodeId: '104-2501' },
      { slug: 'illustrations', name: 'Illustrations',              nodeId: '104-2591' },
      { slug: 'collaterals',   name: 'Collaterals',                nodeId: '23913-56869' },
    ],
  },
  {
    id: 'components',
    title: '2 · Components',
    components: [
      { slug: 'accordion',         name: 'Accordion',                          nodeId: '104-2602' },
      { slug: 'badges',            name: 'Badges',                             nodeId: '104-2596' },
      { slug: 'breadcrumbs',       name: 'Breadcrumbs',                        nodeId: '1-16' },
      { slug: 'buttons',           name: 'Buttons',                            nodeId: '1-17' },
      { slug: 'checkbox',          name: 'Checkbox',                           nodeId: '17179-17220' },
      { slug: 'data-table',        name: 'Data Table',                         nodeId: '1-38' },
      { slug: 'date-time-input',   name: 'Date & Time Input',                  nodeId: '1-20' },
      { slug: 'dropdown-menu',     name: 'Dropdown Menu',                      nodeId: '18273-13431' },
      { slug: 'dual-listbox',      name: 'Dual Listbox',                       nodeId: '30135-48376' },
      { slug: 'filter-action-row', name: 'Filter & Action Row',                nodeId: '1-26' },
      { slug: 'inline-message',    name: 'Inline Message',                     nodeId: '6353-4404' },
      { slug: 'loader',            name: 'Loader',                             nodeId: '14674-32928' },
      { slug: 'modals',            name: 'Modals',                             nodeId: '14690-120458' },
      { slug: 'overlay',           name: 'Overlay',                            nodeId: '28244-16870' },
      { slug: 'radio',             name: 'Radio Button',                       nodeId: '17179-19710' },
      { slug: 'scroll-bar',        name: 'Scroll bar',                         nodeId: '104-2603' },
      { slug: 'simple-search',     name: 'Simple / Quick Search',              nodeId: '19132-35175' },
      { slug: 'tabs',              name: 'Tabs',                               nodeId: '1-27' },
      { slug: 'text-fields',       name: 'Text Fields',                        nodeId: '1-32' },
      { slug: 'toastbar',          name: 'Toastbar',                           nodeId: '1325-2740' },
      { slug: 'toggle-switch',     name: 'Toggle / Switch',                    nodeId: '17180-20833' },
      { slug: 'tooltips',          name: 'Tooltips',                           nodeId: '104-2593' },
      { slug: 'wizard',            name: 'Wizard',                             nodeId: '12054-11832' },
    ],
  },
  {
    id: 'product-specific',
    title: '3 · Product Specific',
    components: [
      { slug: 'background-process-card', name: 'Background Process Card', nodeId: '1-25' },
      { slug: 'bulk-action-bar',         name: 'Bulk Action Bar',         nodeId: '18993-39429' },
      { slug: 'column-selector',         name: 'Column Selector',         nodeId: '49861-290' },
      { slug: 'header',                  name: 'Header',                  nodeId: '6211-51778' },
      { slug: 'notification-panel',      name: 'Notification Panel',      nodeId: '223-2292' },
      { slug: 'persistent-alert',        name: 'Persistent Alert',        nodeId: '36883-43038' },
      { slug: 'perspective-nav',         name: 'Perspective Nav',         nodeId: '6213-22318' },
      { slug: 'primary-secondary-nav',   name: 'Primary & Secondary Nav', nodeId: '1-23' },
      { slug: 'slideout-panels',         name: 'Slideout Panels',         nodeId: '293-883' },
      { slug: 'tags',                    name: 'Tags',                    nodeId: '17194-11363' },
      { slug: 'timeline',                name: 'Timeline',                nodeId: '40600-33454' },
    ],
  },
  {
    id: 'data-visualization',
    title: '4 · Data Visualization',
    components: [
      { slug: 'business-insights-panel', name: 'Business Insights Panel', nodeId: '21741-20109' },
      { slug: 'data-visualization',      name: 'Data Visualization',      nodeId: '1-33' },
      { slug: 'kpi-cockpit',             name: 'KPI Cockpit',             nodeId: '15-7218' },
    ],
  },
  {
    id: 'guidelines',
    title: '5 · Guidelines',
    components: [
      { slug: 'empty-states',  name: 'Empty States',              nodeId: '27797-6528' },
      { slug: 'number-format', name: 'Number / Percentage Format', nodeId: '18723-33776' },
      { slug: 'abbreviations', name: 'Abbreviations',             nodeId: '39055-2823' },
    ],
  },
];

/** Flattened lookup by slug. */
export const PDS_COMPONENTS_BY_SLUG: Record<string, PdsComponent> = Object.fromEntries(
  PDS_SECTIONS.flatMap(s => s.components.map(c => [c.slug, c]))
);

/** All slugs in order. */
export const PDS_ALL_SLUGS: string[] = PDS_SECTIONS.flatMap(s => s.components.map(c => c.slug));

/** True per-page Figma deep link. */
export function pdsFigmaUrl(slug: string): string {
  const c = PDS_COMPONENTS_BY_SLUG[slug];
  if (!c) return FILE_URL;
  return `${FILE_URL}?node-id=${c.nodeId}`;
}
