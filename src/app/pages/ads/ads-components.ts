// ADS sidebar manifest — mirrors the Aurora EAP1 v2 Figma file 1:1.
// Page names and node-ids captured via the Figma MCP metadata API.
//
//   File: https://www.figma.com/design/g8kUyLHFvuWxDgEHzO3Udc/ADS--EAP1-v2

export const ADS_FIGMA_FILE = 'g8kUyLHFvuWxDgEHzO3Udc';
const FILE_URL = `https://www.figma.com/design/${ADS_FIGMA_FILE}/ADS--EAP1-v2`;

export interface AdsComponent {
  slug: string;
  name: string;
  nodeId: string;
  /** Figma status emoji shown in the original page title (✅, 🚧, etc.) */
  status?: '✅' | '🚧';
}

export interface AdsSection {
  id: string;
  title: string;
  components: AdsComponent[];
}

export const ADS_SECTIONS: AdsSection[] = [
  {
    id: 'foundations',
    title: '1 · Foundations',
    components: [
      { slug: 'colors',          name: 'Colors',                   nodeId: '5-420',       status: '🚧' },
      { slug: 'visual-language', name: 'Visual Language',          nodeId: '2253-20916' },
      { slug: 'typography',      name: 'Typography',               nodeId: '8-500',       status: '✅' },
      { slug: 'grid-spacing',    name: 'Grid, Layout & Spacing',   nodeId: '8-922',       status: '✅' },
      { slug: 'iconography',     name: 'Iconography',              nodeId: '8-923',       status: '🚧' },
      { slug: 'accessibility',   name: 'Accessibility',            nodeId: '8-924' },
      { slug: 'usability',       name: 'Usability',                nodeId: '7039-12592' },
    ],
  },
  {
    id: 'components',
    title: '2 · Components',
    components: [
      { slug: 'badges',               name: 'Badges & Status Chips',         nodeId: '3738-51613',  status: '🚧' },
      { slug: 'breadcrumbs',          name: 'Breadcrumbs',                   nodeId: '3694-18750',  status: '🚧' },
      { slug: 'buttons',              name: 'Buttons',                       nodeId: '2084-27370' },
      { slug: 'checkbox',             name: 'Checkbox',                      nodeId: '3147-6539' },
      { slug: 'confirmation-dialog',  name: 'Confirmation Dialog',           nodeId: '3138-3048' },
      { slug: 'data-table',           name: 'Data Table',                    nodeId: '2965-554',    status: '🚧' },
      { slug: 'date-time-picker',     name: 'Date & Time Picker',            nodeId: '3738-7394' },
      { slug: 'dropdown-menu',        name: 'Dropdown & Menu List',          nodeId: '4588-20072' },
      { slug: 'dual-listbox',         name: 'Dual Listbox',                  nodeId: '3694-18615',  status: '🚧' },
      { slug: 'empty-state',          name: 'Empty State',                   nodeId: '3738-30001',  status: '🚧' },
      { slug: 'filters',              name: 'Filters & Rule Builder',        nodeId: '3455-8571',   status: '🚧' },
      { slug: 'inline-action-dialog', name: 'Inline Action Dialog',          nodeId: '5313-13988' },
      { slug: 'input',                name: 'Input (Text Field & Area)',     nodeId: '3471-146' },
      { slug: 'loader',               name: 'Loader',                        nodeId: '3738-30089',  status: '🚧' },
      { slug: 'notifications',        name: 'Notifications',                 nodeId: '2960-734',    status: '🚧' },
      { slug: 'overlay',              name: 'Overlay',                       nodeId: '12380-133976',status: '🚧' },
      { slug: 'quick-finder',         name: 'Quick Finder',                  nodeId: '3743-1756',   status: '🚧' },
      { slug: 'radio',                name: 'Radio Button',                  nodeId: '3139-5195' },
      { slug: 'simple-search',        name: 'Simple Search',                 nodeId: '3694-18618',  status: '🚧' },
      { slug: 'slider',               name: 'Slider',                        nodeId: '7842-158779' },
      { slug: 'slideout-panel',       name: 'Slideout Panel',                nodeId: '3738-38376' },
      { slug: 'snackbar',             name: 'Snackbar',                      nodeId: '5106-69419',  status: '🚧' },
      { slug: 'spinner',              name: 'Spinner',                       nodeId: '14647-12771', status: '🚧' },
      { slug: 'stepper',              name: 'Stepper',                       nodeId: '3694-18751',  status: '🚧' },
      { slug: 'tabs',                 name: 'Tabs',                          nodeId: '2030-398',    status: '🚧' },
      { slug: 'toast',                name: 'Toast',                         nodeId: '2792-34584',  status: '🚧' },
      { slug: 'toggle',               name: 'Toggle',                        nodeId: '3694-18475',  status: '🚧' },
      { slug: 'toolbar-right-panel',  name: 'Toolbar Right Panel',           nodeId: '3744-1758',   status: '🚧' },
      { slug: 'tooltip',              name: 'Tooltip',                       nodeId: '3738-29982',  status: '🚧' },
      { slug: 'top-navigation',       name: 'Top Navigation Bar',            nodeId: '3694-18622',  status: '🚧' },
      { slug: 'upload-box',           name: 'Upload Box',                    nodeId: '3661-6266',   status: '🚧' },
      { slug: 'widget',               name: 'Widget (Header & Footer)',      nodeId: '3738-29983',  status: '🚧' },
    ],
  },
  {
    id: 'data-viz',
    title: '3 · Data Visualization',
    components: [],
  },
  {
    id: 'content-guidelines',
    title: '4 · Content Guidelines',
    components: [
      { slug: 'number-format',    name: 'Number Format',    nodeId: '15901-41440', status: '🚧' },
      { slug: 'abbreviations',    name: 'Abbreviations',    nodeId: '15901-41441', status: '🚧' },
      { slug: 'localization',     name: 'Localization',     nodeId: '6093-23837',  status: '🚧' },
      { slug: 'content-strategy', name: 'Content Strategy', nodeId: '5272-2143',   status: '🚧' },
    ],
  },
];

/** Parsed sections extracted from an Aurora v2 Figma component description (via MCP). */
export interface AdsFigmaDoc {
  summary?: string;
  whenToUse?: string;
  whenNotToUse?: string;
  properties?: { name: string; type?: string; notes?: string }[];
  accessibility?: string;
  selector?: string;
  rules?: string[];
}

/**
 * Figma docs pulled from the Aurora v2 file (g8kUyLHFvuWxDgEHzO3Udc) via the
 * Figma MCP search_design_system description field. Only components whose
 * Figma description has been authored appear here. Other components fall
 * back to the "Open in Figma" link section.
 *
 * Last synced: 2026-06-07.
 */
export const ADS_FIGMA_DOCS: Record<string, AdsFigmaDoc> = {
  buttons: {
    summary: 'The primary interactive element for triggering actions. Supports 5 visual types across 4 interaction states.',
    whenToUse: 'Use Primary for main CTAs, Secondary for supporting actions, Negative for destructive actions, Tertiary for low-emphasis actions, and Link for navigation.',
    properties: [
      { name: 'Type',  type: 'Primary | Secondary | Negative | Tertiary | Link' },
      { name: 'State', type: 'Default | Hover | Pressed | Disabled' },
      { name: 'Split Button', type: 'boolean', notes: 'Adds a chevron dropdown trigger. Primary & Secondary only.' },
    ],
    accessibility: 'Supports keyboard activation (Enter/Space), aria-disabled for disabled state, focus ring on tab.',
    selector: '<ib-button>',
    rules: ['Split Button is only available for Primary and Secondary types.'],
  },

  radio: {
    summary: 'Select a single option from a group of mutually exclusive choices. Displays a circular indicator alongside a configurable label.',
    whenToUse: 'Always use within a radio group of 2 or more options. One option should be pre-selected. Use when the user must see all options at once.',
    properties: [
      { name: 'State',    type: 'Default | Hover | Disabled | Focused' },
      { name: 'Selected', type: 'Yes | No' },
      { name: 'Label',    type: 'string',  notes: 'Configurable text (default "Label")' },
      { name: 'Tooltip',  type: 'boolean', notes: 'Toggle an info icon button' },
    ],
    accessibility: 'role="radio", aria-checked bound to selected state. Arrow keys navigate within group, Space selects the focused option.',
    selector: '<ib-radio>',
  },

  checkbox: {
    summary: 'A binary input control for independently toggling one or more options within a set.',
    whenToUse: 'Use when multiple options can be selected simultaneously and each is independent. Use the Indeterminate type when a parent checkbox represents a group whose children are partially selected — toggling it selects all children.',
    whenNotToUse: 'Use Radio Button for single-select from a group. Use Toggle for a standalone on/off setting that takes immediate effect.',
    accessibility: 'role="checkbox". aria-checked="true" (Checked), "false" (Unchecked), "mixed" (Indeterminate). aria-disabled="true" when Disabled. Space key toggles. A visible Label or aria-label is always required.',
    selector: '<ads-checkbox>',
    rules: [
      'Do not combine Indeterminate + Disabled — a partially-selected group that is non-interactive is not a valid product state.',
      'When used with helper text, error messages, or a field-level label, place inside a Form Field component.',
    ],
  },

  toggle: {
    summary: 'A two-segment toggle that switches between two mutually exclusive options. One side is always selected, shown with a filled brand-blue background and inverted text/icon.',
    whenToUse: 'Use to toggle between two binary views or display modes (e.g., list view vs. grid view). Always pair with a visible label or tooltip so the purpose of each option is clear.',
    properties: [
      { name: 'Selected',    type: 'LHS | RHS' },
      { name: 'State',       type: 'Default | Hover' },
      { name: 'Type',        type: 'Icon only | Text only' },
      { name: 'Label left',  type: 'string', notes: 'Text label on the LHS button (Text only)' },
      { name: 'Label right', type: 'string', notes: 'Text label on the RHS button (Text only)' },
    ],
    accessibility: 'role="group" on the container, each button role="radio" with aria-checked. Keyboard navigation via arrow keys between options.',
  },

  input: {
    summary: 'A text input field for collecting single-line user input with label support and validation.',
    whenToUse: 'Use inside forms for text entry. Wrap with ib-form-field for label, validation, and error handling. Pair with ib-input for the actual input element.',
    properties: [
      { name: 'Label Position', type: 'Top aligned | Left aligned' },
      { name: 'State',          type: 'Default | Hover | Focused | Entered | Error | Disabled | Masked | Unmasked | Masked Disabled' },
      { name: 'Show Label',     type: 'boolean', notes: 'Toggle label visibility' },
      { name: 'Mandatory',      type: 'boolean', notes: 'Show required asterisk' },
      { name: 'Inline Edit',    type: 'boolean', notes: 'Enable inline editing mode' },
      { name: 'Info Icon',      type: 'boolean', notes: 'Show info icon button' },
      { name: 'Helper Text',    type: 'boolean', notes: 'Show helper text below field' },
      { name: 'Error Helper',   type: 'boolean', notes: 'Show error message below field' },
    ],
    accessibility: 'Required indication via asterisk, error messages via aria association, disabled state, and password masking with show/hide toggle.',
  },

  'date-time-picker': {
    summary: 'A date and time input field for capturing temporal values in forms. Supports four input types: Date, Time, Date & Time, and Timezone.',
    whenToUse: 'Use in forms where users need to input date, time, or timezone values. Date shows MM/DD/YY format, Time shows HH:MM format, Date & Time combines both, Timezone is a dropdown selector.',
    properties: [
      { name: 'Type',           type: 'Date | Time | Date & Time | Timezone' },
      { name: 'Label Position', type: 'Top aligned | Left aligned' },
      { name: 'State',          type: 'Default | Hover | Focused | Value Entered | Disabled | Error' },
      { name: 'Mandatory',      type: 'boolean', notes: 'Shows red asterisk next to label' },
      { name: 'Helper Text',    type: 'boolean', notes: 'Toggles helper message below field' },
    ],
    accessibility: 'Each field includes a visible label (toggleable), placeholder format guidance, and a trailing icon (Calendar/Clock/Chevron). Error state shows a red border and helper text.',
  },

  slider: {
    summary: 'An interactive subnet mask slider for selecting CIDR prefix lengths (1–32) in IP address configuration interfaces.',
    whenToUse: 'Use Default when the full prefix scale (1–32) should be visible for precise control. Use Compact when space is limited and the value is shown in an adjacent input field.',
    properties: [
      { name: 'Size', type: 'Default | Compact', notes: 'Default shows tick marks; Compact is track + knob only.' },
    ],
    accessibility: 'role="slider" with aria-valuemin, aria-valuemax, aria-valuenow bound to the current value. Support ArrowLeft/ArrowRight to increment/decrement.',
    selector: '<ib-slider>',
  },

  stepper: {
    summary: 'Displays a single step in a multi-step horizontal progress workflow.',
    whenToUse: 'Use within a horizontal stepper group to represent individual steps in a sequential process. Position in order from left to right. Only one step should be in Current state at a time.',
    properties: [
      { name: 'State',        type: 'Unvisited | Current | Completed | Disabled | Error' },
      { name: 'Retry action', type: 'boolean', notes: 'Show Retry action button (Error state only)' },
      { name: 'Show Link',    type: 'boolean', notes: 'Navigation link below step title (Completed & Current only)' },
      { name: 'Title',        type: 'string',  notes: 'Label below the step indicator' },
    ],
    accessibility: 'Title text uses role-appropriate color tokens per state. Error state includes a Retry action button. Focus is managed by the parent stepper container.',
  },

  breadcrumbs: {
    summary: "A horizontal breadcrumb navigation bar showing the user's current location within a page hierarchy. Supports 1 to 5 depth levels.",
    whenToUse: 'Use Page type (with back-arrow icon) for in-page navigation. Use Slideout type (no back-arrow) inside slide-out panels and dialogs. The last breadcrumb is automatically set to Read Only to indicate the current page.',
    properties: [
      { name: 'Count',      type: '1 | 2 | 3 | 4 | 5', notes: 'Depth of breadcrumb trail' },
      { name: 'Type',       type: 'Page | Slideout' },
      { name: 'Back Arrow', type: 'boolean', notes: 'Controls back-navigation icon visibility (Page type)' },
    ],
    selector: '<ib-breadcrumbs>',
  },

  'slideout-panel': {
    summary: 'A modal side-panel (drawer) that overlays the main content area, providing a focused workspace for detail views, forms, and multi-step wizard flows.',
    whenToUse: 'Use Standard (628px) for single-step forms, detail views, and settings panels. Use Extended (1703px) for data-rich views or content-heavy layouts. Enable Sidebar for multi-step wizard flows where step progress is visible alongside the content.',
    properties: [
      { name: 'Type',    type: 'Standard | Extended' },
      { name: 'Sidebar', type: 'Off | On' },
    ],
    accessibility: 'role="dialog", aria-modal="true". Bind aria-labelledby to the header title. Trap focus within the panel when open. The Dismiss button is keyboard-accessible via Enter/Space.',
  },

  tooltip: {
    summary: 'Displays contextual information when hovering or focusing on a target element. Appears as a floating card with a caret arrow pointing toward the trigger.',
    whenToUse: 'Use Standard for explanatory text (max 300px width), Small for brief labels or counts. Wrap a trigger element and position the tooltip adjacent to it.',
    properties: [
      { name: 'Type',                type: 'Standard | Small' },
      { name: 'Caret Tip Direction', type: 'Top | Right | Left | Bottom' },
    ],
    accessibility: 'role="tooltip", aria-describedby on the trigger, dismiss on Escape. Tooltip content must not contain interactive elements.',
    selector: '<ib-tooltip>',
  },

  toast: {
    summary: 'Displays a brief, auto-dismissible notification message that provides contextual feedback on a user action or system event.',
    whenToUse: 'Use for transient, non-blocking messages that appear briefly and then disappear. Position at the top-right or bottom of the viewport.',
    whenNotToUse: 'Do not use for messages that require user acknowledgement or contain actionable decisions — use a dialog instead.',
    properties: [
      { name: 'Type', type: 'Success | Alert | Info' },
    ],
    accessibility: 'role="alert" and aria-live="polite" (assertive for Alert). The dismiss button must have aria-label="Dismiss notification". Icon and colour are supplementary — the message text must convey meaning independently.',
    selector: '<ib-toast>',
  },

  'empty-state': {
    summary: 'Communicates the absence of data, a failed load, or an empty result set.',
    whenToUse: 'Place inline within content areas, panels, tables, or full-page views when content cannot be loaded or is absent. Choose size based on available space.',
    properties: [
      { name: 'Size',     type: 'Small | Medium | Large' },
      { name: 'Icon',     type: 'boolean', notes: 'Show/hide illustration (Medium & Large only)' },
      { name: 'Subtext',  type: 'boolean', notes: 'Show/hide subtitle text (Medium & Large only)' },
      { name: 'Title',    type: 'string',  notes: 'Primary message text' },
      { name: 'Subtitle', type: 'string',  notes: 'Supporting detail text' },
    ],
    accessibility: 'Title is mandatory. Use aria-live regions to announce state changes. Button child handles keyboard/focus behaviour.',
  },

  'dual-listbox': {
    summary: 'A dual-column list selector that allows users to move items between an Available/Excluded column and a Selected/Included column using directional action buttons.',
    whenToUse: 'Use when users need to select a subset of items from a larger list (e.g., filter attributes, assign permissions), when selection order matters, or when the count of selected items needs to be visible at all times.',
    whenNotToUse: 'Use a simple multi-select checkbox list when fewer than ~5 items are involved, or when order is irrelevant and a tag input would be clearer.',
    accessibility: 'Replace generic column headings with descriptive labels ("Available Attributes" / "Selected Attributes"). Action buttons require accessible labels describing direction and scope. Keyboard users must be able to select items and trigger move actions without a mouse.',
    rules: [
      'On move, items appear at the top of the destination column for 5 seconds before sorting alphabetically.',
      'Two hidden "All items" action buttons exist for move-all scenarios; show/hide via visibility toggle.',
    ],
  },

  'upload-box': {
    summary: 'A drag-and-drop file upload zone. Users upload files by dragging them into the area or clicking Browse to open a file picker.',
    whenToUse: 'Use as the primary file upload interaction. Supports JSON files with configurable format restrictions and file size limits.',
    properties: [
      { name: 'State', type: 'Default | Entered | Disabled', notes: 'Default = empty drop zone; Entered = uploaded file cards listed below; Disabled = max files reached, non-interactive.' },
    ],
    accessibility: 'Drop zone should have role="button" with aria-label="Upload file". The Browse link must be keyboard-focusable and trigger the file picker. Announce upload status changes via aria-live region.',
    rules: [
      'Upload card sub-component supports 6 states: Default, Default-Hover, In progress, Completed, Error, Error-Hover.',
      'For In progress and Error states, compose Upload card instances inside the "Uploaded files container" slot.',
    ],
  },

  filters: {
    summary: 'A full-width filtering panel for constructing, combining, and saving filter rules for data grids and list views. Composed with the Filter Button trigger, a rule-builder row, and the Filter Bar container.',
    whenToUse: 'Place the Filter Button in toolbar rows alongside search and sort controls. The Filter Bar appears below when the panel is toggled open. Use Single for one-condition filtering, Multiple for complex multi-condition filtering, and Saved for persisting and reusing filter configurations.',
    properties: [
      { name: 'Filter Button state', type: 'Default | Hover | Selected | Active | Disabled', notes: 'Active state shows count of applied filters.' },
      { name: 'Filter Bar type',     type: 'Single | Multiple | Saved' },
      { name: 'Max rules',           type: '10', notes: 'In Multiple and Saved types. After 240px height, internal scroll applies.' },
    ],
    accessibility: 'Filter Button: role="button", aria-pressed for Selected/Active. Each filter rule row should be labeled with its position (e.g., "Filter rule 1 of 3"). Focus should move to the first dropdown when the panel opens.',
    rules: ['Apply/Save/Reset CTAs remain disabled by default until the user has entered data.'],
  },
};

export const ADS_COMPONENTS_BY_SLUG: Record<string, AdsComponent> = Object.fromEntries(
  ADS_SECTIONS.flatMap(s => s.components.map(c => [c.slug, c]))
);

export const ADS_ALL_SLUGS: string[] = ADS_SECTIONS.flatMap(s => s.components.map(c => c.slug));

export function adsFigmaUrl(slug: string): string {
  const c = ADS_COMPONENTS_BY_SLUG[slug];
  if (!c) return FILE_URL;
  return `${FILE_URL}?node-id=${c.nodeId}`;
}
