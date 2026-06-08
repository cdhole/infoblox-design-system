// PDS Core API — the real Angular library each component page documents.
//
// Source: https://github.com/Infoblox-CTO/csp.pds-core.ui
// Library: @infoblox-cto/pds-core (v9.x, Angular 15+)
//
// This file is the single source of truth for "Code" sections on PDS
// component pages — selector, class name, inputs/outputs, NgModule import,
// and a minimal template snippet. Figma-derived docs (descriptions,
// when-to-use, anatomy) live separately in PDS_FIGMA_DOCS and remain
// untouched.

export interface PdsApi {
  /** Real CSS/attribute selector (e.g. 'ib-pds-checkbox' or 'button[ibPdsButton]'). */
  selector?: string;
  /** Class to import from @infoblox-cto/pds-core. */
  className?: string;
  /** NgModule to import (when one exists). Standalone components omit this. */
  module?: string;
  /** Real @Input names from the library source. */
  inputs?: string[];
  /** Real @Output event names. */
  outputs?: string[];
  /** Free-form note rendered above the code (e.g. "Composed with material datepicker"). */
  note?: string;
  /** Minimal template usage. {{accent}} placeholders are unused — write literal HTML. */
  template?: string;
  /** Optional companion selectors/classes (children, related directives). */
  companion?: { selector: string; className?: string }[];
}

const PKG = '@infoblox-cto/pds-core';

export const PDS_CORE_API: Record<string, PdsApi> = {
  // ── Components ──────────────────────────────────────────────────────────

  buttons: {
    selector: 'button[ibPdsButton]',
    className: 'PdsButtonDirective',
    inputs: ['type', 'theme', 'iconLeft', 'iconRight', 'iconCustomClass'],
    note: 'Applied as a directive on a native <button>. Theme set via [theme] input.',
    template: `<button ibPdsButton theme="primary">Save</button>
<button ibPdsButton theme="secondary">Cancel</button>
<button ibPdsButton theme="danger" iconLeft="fa-trash">Delete</button>`,
    companion: [
      { selector: 'ib-pds-multi-action-button', className: 'PdsMultiActionButtonComponent' },
    ],
  },

  checkbox: {
    selector: 'ib-pds-checkbox',
    className: 'PdsCheckboxComponent',
    module: 'PdsCheckboxModule',
    inputs: ['disabled', 'checked', 'customCssClass', 'faFormat', 'tickClass', 'label'],
    template: `<ib-pds-checkbox [(checked)]="agreed" label="I agree to the terms"></ib-pds-checkbox>`,
    companion: [
      { selector: 'ib-pds-three-state-checkbox', className: 'PdsThreeStateCheckboxComponent' },
      { selector: '[ibPdsCheckboxLabelLeft]' },
      { selector: '[ibPdsCheckboxLabelRight]' },
    ],
  },

  radio: {
    selector: 'ib-pds-radio-group',
    className: 'PdsRadioGroupComponent',
    inputs: ['disabled', 'direction', 'options', 'radioGroupMetaProvider'],
    template: `<ib-pds-radio-group [options]="options" direction="vertical"
                    [(ngModel)]="selected"></ib-pds-radio-group>`,
    companion: [
      { selector: 'ib-pds-radio-button', className: 'PdsRadioButtonComponent' },
    ],
  },

  'text-fields': {
    note: 'Text inputs use Angular Material under the hood. There is no dedicated <ib-pds-text-field> in pds-core — apply PDS styling to <input matInput> inside <mat-form-field>.',
    template: `<mat-form-field appearance="outline">
  <mat-label>Hostname</mat-label>
  <input matInput [(ngModel)]="host" placeholder="dn-42-prd" />
</mat-form-field>`,
  },

  'date-time-input': {
    note: 'Date/time uses Material datepicker. Form-extensions module wires PDS-styled controls.',
    template: `<mat-form-field appearance="outline">
  <mat-label>Date</mat-label>
  <input matInput [matDatepicker]="picker" [(ngModel)]="when" />
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
  },

  badges: {
    selector: 'ib-pds-status-badge',
    className: 'PdsStatusBadgeComponent',
    inputs: ['status', 'isFocused'],
    template: `<ib-pds-status-badge status="active"></ib-pds-status-badge>
<ib-pds-severity-badge type="critical" [priority]="1"></ib-pds-severity-badge>
<ib-pds-counter-badge [count]="12"></ib-pds-counter-badge>`,
    companion: [
      { selector: 'ib-pds-severity-badge', className: 'PdsSeverityBadgeComponent' },
      { selector: 'ib-pds-counter-badge',  className: 'PdsCounterBadgeComponent' },
      { selector: 'ib-pds-teaser-badge',   className: 'PdsTeaserBadgeComponent' },
      { selector: 'ib-pds-indicator-badge', className: 'PdsIndicatorBadgeComponent' },
      { selector: 'ib-pds-custom-badge',   className: 'PdsCustomBadgeComponent' },
    ],
  },

  breadcrumbs: {
    selector: 'ib-pds-breadcrumbs',
    className: 'PdsBreadcrumbsComponent',
    inputs: ['crumbs', 'separator', 'maxFullPathDeep'],
    template: `<ib-pds-breadcrumbs [crumbs]="trail" separator="/"></ib-pds-breadcrumbs>`,
  },

  accordion: {
    selector: 'ib-pds-collapsible-panel',
    className: 'PdsCollapsiblePanelComponent',
    module: 'PdsCollapsiblePanelModule',
    inputs: ['showMenu', 'showJumpTo'],
    template: `<ib-pds-collapsible-panel>
  <ib-pds-collapsible-panel-item title="Profile">Profile content</ib-pds-collapsible-panel-item>
  <ib-pds-collapsible-panel-item title="Security">Security content</ib-pds-collapsible-panel-item>
</ib-pds-collapsible-panel>`,
    companion: [
      { selector: 'ib-pds-collapsible-panel-item', className: 'PdsCollapsiblePanelItemComponent' },
    ],
  },

  'data-table': {
    selector: 'ib-pds-standard-data-table',
    className: 'PdsStandardDataTableComponent',
    module: 'PdsStandardDataTableModule',
    inputs: ['persistenceKey', 'extraCellContext', 'actions', 'enableScroll', 'showColumnsConfigurator', 'rowHeight'],
    template: `<ib-pds-standard-data-table [data]="rows" persistenceKey="alerts">
  <ib-pds-standard-data-table-column name="domain" header="Domain"></ib-pds-standard-data-table-column>
  <ib-pds-standard-data-table-column name="hits"   header="Hits"></ib-pds-standard-data-table-column>
</ib-pds-standard-data-table>`,
    companion: [
      { selector: 'ib-pds-shutter-data-table', className: 'PdsShutterDataTableComponent' },
      { selector: 'ib-pds-standard-data-table-column' },
      { selector: 'ib-pds-list-table',        className: 'PdsListTableComponent' },
    ],
  },

  'dropdown-menu': {
    selector: 'ib-pds-dropdown-menu',
    className: 'PdsDropdownMenuComponent',
    inputs: ['actions', 'overlayPanelClass', 'isVisible', 'noSelection', 'origin', 'menuPositions', 'selection'],
    template: `<ib-pds-dropdown-menu [actions]="menuActions" [(isVisible)]="open"
                      [origin]="trigger"></ib-pds-dropdown-menu>`,
    companion: [
      { selector: 'ib-pds-dropdown-select',    className: 'PdsDropdownSelectComponent' },
      { selector: 'ib-pds-dropdown-menu-item', className: 'PdsDropdownMenuItemComponent' },
    ],
  },

  'dual-listbox': {
    selector: 'ib-pds-dual-listbox',
    className: 'PdsDualListboxComponent',
    module: 'PdsDualListboxModule',
    inputs: ['set', 'availableTitle', 'selectedTitle', 'availableEmptyText', 'selectedEmptyText', 'isSearchEnabled', 'isReadonlyMode'],
    template: `<ib-pds-dual-listbox [set]="items"
                    availableTitle="Available"
                    selectedTitle="Selected"
                    [isSearchEnabled]="true"></ib-pds-dual-listbox>`,
  },

  'filter-action-row': {
    selector: 'ib-pds-filter-search-bar',
    className: 'PdsFilterSearchBarLegacyComponent',
    module: 'PdsFilterSearchBarLegacyModule',
    inputs: ['filterItems', 'config', 'persistenceKey'],
    template: `<ib-pds-filter-search-bar [filterItems]="filters" [config]="config"
                          persistenceKey="alerts-page"></ib-pds-filter-search-bar>`,
  },

  'inline-message': {
    note: 'No dedicated PDS inline-message component. Use PdsFeedbackPanel for inline notifications.',
    selector: 'ib-pds-feedback-panel',
    className: 'PdsFeedbackPanelComponent',
    template: `<ib-pds-feedback-panel type="warning">Configuration applied. Restart to take effect.</ib-pds-feedback-panel>`,
  },

  loader: {
    selector: 'ib-pds-spinner',
    className: 'PdsSpinnerComponent',
    inputs: ['maskRequired', 'requiredSize', 'delay', 'minHideDelay', 'started'],
    template: `<ib-pds-spinner [started]="loading" [maskRequired]="true" requiredSize="medium"></ib-pds-spinner>`,
  },

  modals: {
    selector: 'ib-pds-add-edit-dialog',
    className: 'PdsAddEditDialogComponent',
    module: 'PdsAddEditDialogModule',
    inputs: ['isJumpToVisible', 'isCustomFooter', 'title', 'subTitle', 'saveTitle', 'saveOnly', 'saveButtonDisabled'],
    template: `<ib-pds-add-edit-dialog title="Edit alert" saveTitle="Save changes"
                       (save)="onSave()" (cancel)="onCancel()">
  <!-- form fields -->
</ib-pds-add-edit-dialog>`,
    companion: [
      { selector: 'ib-pds-inner-dialog',   className: 'PdsInnerDialogComponent' },
      { selector: 'ib-pds-inline-dialog',  className: 'PdsInlineDialogComponent' },
    ],
  },

  overlay: {
    note: 'PDS overlays are built on Angular CDK overlay primitives. Compose via PopUp / Tooltip / Slide-out-panel rather than a dedicated overlay component.',
  },

  'scroll-bar': {
    note: 'Scroll styling is applied via PDS theme CSS. No standalone scroll-bar component.',
  },

  'simple-search': {
    selector: 'ib-pds-simple-search',
    className: 'PdsSimpleSearchComponent',
    inputs: ['searchInput', 'showSearchIcon', 'autocompleteDictionary', 'searchPlaceholder', 'autocompleteDebounceTime', 'resultCountLabel'],
    template: `<ib-pds-simple-search [(searchInput)]="query" searchPlaceholder="Search domains..."
                      [autocompleteDictionary]="suggestions"></ib-pds-simple-search>`,
  },

  tabs: {
    selector: 'ib-pds-content-tab',
    className: 'PdsContentTabComponent',
    inputs: ['tabs', 'activeTabId', 'customCssClass', 'useRouter', 'basePath'],
    template: `<ib-pds-content-tab [tabs]="tabs" [activeTabId]="activeId"
                     (activeTabIdChange)="onTabChange($event)"></ib-pds-content-tab>`,
    companion: [
      { selector: 'ib-pds-tab-element',   className: 'PdsTabElementComponent' },
      { selector: 'ib-pds-nested-tabs',   className: 'PdsNestedTabsComponent' },
      { selector: 'ib-pds-slideout-tabs', className: 'PdsSlideoutTabsComponent' },
    ],
  },

  toastbar: {
    note: 'PDS toasts/snackbars surface via Material snackbar with PDS theming. There is no dedicated toastbar component.',
    template: `// In a service
this.snackBar.open('Saved', 'Dismiss', { duration: 3000, panelClass: 'pds-toast' });`,
  },

  'toggle-switch': {
    selector: 'ib-pds-toggle-button',
    className: 'PdsToggleButtonComponent',
    inputs: ['type', 'disabled', 'label', 'offLabel', 'onLabel', 'ariaLabel', 'forceHover', 'forcePressed'],
    template: `<ib-pds-toggle-button [(checked)]="enabled" onLabel="On" offLabel="Off"></ib-pds-toggle-button>`,
    companion: [
      { selector: 'ib-pds-two-button-toggle', className: 'PdsTwoButtonToggleComponent' },
    ],
  },

  tooltips: {
    selector: 'ib-pds-hover-tooltip',
    className: 'PdsHoverTooltipComponent',
    module: 'PdsTooltipModule',
    inputs: ['blockMode', 'tooltipConfiguration', 'position', 'top', 'left'],
    note: 'For most cases, use the [ibPdsTooltipDirective] on a target element. The component form is used for templated/custom tooltips.',
    template: `<button ibPdsButton [ibPdsTooltipDirective]="'Save your changes'">Save</button>`,
    companion: [
      { selector: '[ibPdsTooltipDirective]' },
      { selector: '[ibPdsCustomTooltipDirective]' },
    ],
  },

  wizard: {
    selector: 'ib-pds-wizard',
    className: 'PdsWizardComponent',
    inputs: ['steps', 'navigationMode'],
    template: `<ib-pds-wizard [steps]="wizardSteps" navigationMode="strict">
  <ib-pds-wizard-step title="Choose source"><!-- step 1 --></ib-pds-wizard-step>
  <ib-pds-wizard-step title="Map fields"><!-- step 2 --></ib-pds-wizard-step>
  <ib-pds-wizard-step title="Review"><!-- step 3 --></ib-pds-wizard-step>
</ib-pds-wizard>`,
    companion: [
      { selector: 'ib-pds-wizard-step',           className: 'PdsWizardStepComponent' },
      { selector: 'ib-pds-wizard-slide-out',      className: 'PdsWizardSlideOutComponent' },
    ],
  },

  // ── Product Specific ────────────────────────────────────────────────────

  'background-process-card': {
    selector: 'ib-pds-card-element',
    className: 'PdsCardElementComponent',
    module: 'PdsCardsModule',
    inputs: ['column', 'templateOnly', 'title', 'description', 'actions', 'titleSupport', 'selectionSupport', 'selected'],
    note: 'Composed using PdsCardElement with custom slots for progress + status.',
    template: `<ib-pds-card-element title="Indexing" description="Building search index">
  <div *ibPdsCardElementContent>
    <ib-pds-spinner [started]="true" requiredSize="small"></ib-pds-spinner>
    47% complete · 12m remaining
  </div>
</ib-pds-card-element>`,
  },

  'bulk-action-bar': {
    selector: 'ib-pds-bulk-action-bar',
    className: 'PdsBulkActionBarComponent',
    inputs: ['selection', 'autoOverflow', 'set', 'showClose', 'selectedItemsLabel', 'maxVisibleActions', 'maxSelectable'],
    template: `<ib-pds-bulk-action-bar [selection]="selected" [set]="actions"
                       selectedItemsLabel="alerts"
                       (close)="clearSelection()"></ib-pds-bulk-action-bar>`,
  },

  'column-selector': {
    note: 'Column selection is built into PdsStandardDataTable via [showColumnsConfigurator]. No standalone column-selector component.',
    selector: 'ib-pds-standard-data-table',
    template: `<ib-pds-standard-data-table [data]="rows" [showColumnsConfigurator]="true">
  <!-- columns -->
</ib-pds-standard-data-table>`,
  },

  header: {
    note: 'Page headers compose breadcrumbs + page-title + actions. There is no single ib-pds-header component.',
    template: `<header class="page-header">
  <ib-pds-breadcrumbs [crumbs]="trail"></ib-pds-breadcrumbs>
  <h1>Alerts</h1>
  <div class="actions">
    <button ibPdsButton theme="primary">New rule</button>
  </div>
</header>`,
  },

  'notification-panel': {
    note: 'Persistent notifications use PdsFeedbackPanel. Pop-out notifications use the PopUp module.',
    selector: 'ib-pds-feedback-panel',
    className: 'PdsFeedbackPanelComponent',
    template: `<ib-pds-feedback-panel type="info">
  3 new threats detected in the last hour. <a>View details</a>
</ib-pds-feedback-panel>`,
  },

  'persistent-alert': {
    selector: 'ib-pds-feedback-panel',
    className: 'PdsFeedbackPanelComponent',
    note: 'Persistent inline alerts use the same feedback-panel as notifications, with [persistent]="true".',
    template: `<ib-pds-feedback-panel type="warning" [persistent]="true">
  Maintenance window scheduled for tonight 22:00 UTC.
</ib-pds-feedback-panel>`,
  },

  'perspective-nav': {
    selector: 'ib-pds-perspective-nav',
    className: 'PdsPerspectiveNavComponent',
    module: 'PdsPerspectiveNavModule',
    inputs: ['title', 'showExtraDataCount', 'isFooterButton', 'footerButtonText', 'footerMultiActions', 'actionsConfig', 'selectedNodeId'],
    template: `<ib-pds-perspective-nav title="Threats"
                       [actionsConfig]="actions"
                       [selectedNodeId]="activeId"
                       (nodeSelect)="onSelect($event)"></ib-pds-perspective-nav>`,
  },

  'primary-secondary-nav': {
    selector: 'ib-pds-side-nav-panel',
    className: 'PdsSideNavLayoutComponent',
    inputs: ['selectedNavIndex', 'navWidth', 'enableNavAnimation'],
    template: `<ib-pds-side-nav-panel [selectedNavIndex]="index" navWidth="220">
  <ib-pds-side-nav-item *ngFor="let item of navItems" [item]="item"></ib-pds-side-nav-item>
</ib-pds-side-nav-panel>`,
    companion: [
      { selector: 'ib-pds-side-nav-item', className: 'PdsSideNavItemComponent' },
    ],
  },

  'slideout-panels': {
    selector: 'ib-pds-slide-out-panel',
    className: 'PdsSlideOutPanelComponent',
    inputs: ['title', 'subtitle', 'overlayPanelClass', 'isModalPanel', 'panelOrientation', 'isOverlayBackdrop'],
    template: `<ib-pds-slide-out-panel title="Edit alert" panelOrientation="right" [isModalPanel]="true"
                         (close)="onClose()">
  <!-- panel content -->
</ib-pds-slide-out-panel>`,
  },

  tags: {
    selector: 'ib-pds-custom-badge',
    className: 'PdsCustomBadgeComponent',
    inputs: ['text', 'size', 'colors', 'isSelected', 'selectedColors', 'isFocused'],
    note: 'PDS represents tag-like chips via custom-badge. The library also exports a PdsChipElement model for the data shape.',
    template: `<ib-pds-custom-badge text="High severity"
                     [colors]="{ background: '#fde7e7', text: '#a51010' }"></ib-pds-custom-badge>`,
  },

  timeline: {
    note: 'No dedicated timeline component in pds-core. Patterns compose card-element rows with severity-badge + status-badge.',
  },

  // ── Foundations & guidelines: no PDS Core component ────────────────────
  // (color, typography, spacing, elevations, grid, icons, logo, illustrations,
  //  collaterals, empty-states, number-format, abbreviations, business-insights-panel,
  //  data-visualization, kpi-cockpit) — intentionally omitted.
};

/** Returns the PDS Core API row for a slug, or undefined when not applicable. */
export function pdsCoreApiFor(slug: string): PdsApi | undefined {
  return PDS_CORE_API[slug];
}

/** Standard package + npm command surfaced on every code page. */
export const PDS_CORE_PACKAGE = PKG;
export const PDS_CORE_INSTALL = `npm install ${PKG}`;
export const PDS_CORE_REPO = 'https://github.com/Infoblox-CTO/csp.pds-core.ui';
