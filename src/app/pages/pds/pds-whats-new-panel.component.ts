import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type ChangeTag = 'breaking' | 'additive' | 'structural' | 'visual';

interface ComponentChange {
  name: string;
  slug?: string;          // when present, links to /pds/components/{slug}
  tags: ChangeTag[];
  bullets: string[];      // HTML allowed (we use [innerHTML])
}

interface TokenChange {
  token: string;
  desc: string;
  oldValue: string;
  newValue: string;
}

@Component({
  selector: 'app-pds-whats-new-panel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <aside class="wn"
           [class.wn--open]="isOpen"
           [attr.aria-hidden]="!isOpen"
           role="complementary"
           aria-labelledby="wn-title">
      <header class="wn__head">
        <div>
          <div class="wn__eyebrow">What's new</div>
          <h2 id="wn-title" class="wn__title">Pegasus 2.5</h2>
          <p class="wn__sub">From PDS 2.0 to 2.5 · Tokens &amp; Components · May 13, 2026</p>
        </div>
        <button type="button" class="wn__close" (click)="onClose()" aria-label="Close What's new">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6"  x2="6"  y2="18"/>
            <line x1="6"  y1="6"  x2="18" y2="18"/>
          </svg>
        </button>
      </header>

      <div class="wn__body">

        <!-- ===== Token value updates ===== -->
        <section class="wn-sec">
          <h3 class="wn-sec__h">Token value updates</h3>
          <table class="wn-tbl">
            <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
            <tbody>
              <tr *ngFor="let t of tokenUpdates">
                <td><code>{{ t.token }}</code><br/><span class="wn-tbl__desc">{{ t.desc }}</span></td>
                <td><code class="wn-tbl__old">{{ t.oldValue }}</code></td>
                <td><code class="wn-tbl__new">{{ t.newValue }}</code></td>
              </tr>
            </tbody>
          </table>
          <p class="wn-callout">
            <code>color-text-secondary</code> links to <code>gray-800</code> — its resolved value also changes to <code>#515151</code>. Run visual regression tests and update any hardcoded hex fallbacks.
          </p>
        </section>

        <!-- ===== Token breaking changes ===== -->
        <section class="wn-sec">
          <h3 class="wn-sec__h">Token breaking changes <span class="wn-pill wn-pill--breaking">Action required</span></h3>
          <ul class="wn-list">
            <li><b>Color paths renamed</b> — <code>colors/01 text/…</code> → <code>colors/text/…</code> (same for 02–06 prefixes, both light &amp; dark mode). <i>Find &amp; replace prefixes in any token pipeline, style dictionary, or CSS var generator.</i></li>
            <li><b>Corner radius shifted</b> — <code>sm</code> 4→2px · <code>md</code> 8→4px · <code>lg</code> 16→8px. <i>Audit <code>lg</code> usage (cards, modals, panels); use new <code>xl</code> (16px) to preserve old <code>lg</code> appearance.</i></li>
            <li><b>Elevation tokens deleted</b> — <code>sm/md/lg-core/cast</code> (24 tokens, no replacement). <i>Apply shadows directly in code until a replacement token is introduced.</i></li>
            <li><b>Component size tokens deleted</b> — Button/Input/Icon/DataTable/Chips heights &amp; widths (48 tokens, no replacement). <i>Replace with hardcoded values or spacing tokens.</i></li>
            <li><b>Spacing restructured</b> — <code>padding.*</code> group + most <code>01 spacing</code> tokens removed; 10 flat pixel-named tokens remain (<code>2px</code>–<code>48px</code>). <i>Replace removed names with pixel-named equivalents.</i></li>
            <li><b>Font sizes removed</b> — <code>font.size.3xs</code> (8px) · <code>font.size.2xs</code> (11px). <i>Smallest is now <code>font.size.xs = 12px</code>.</i></li>
          </ul>
        </section>

        <!-- ===== Semantic color value changes ===== -->
        <section class="wn-sec">
          <h3 class="wn-sec__h">Semantic color value changes</h3>
          <p class="wn-sec__intro">Values changed — run visual regression tests. Update any hardcoded hex fallbacks.</p>
          <table class="wn-tbl">
            <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
            <tbody>
              <tr *ngFor="let s of semanticColors">
                <td><code>{{ s.token }}</code></td>
                <td>
                  <span class="wn-swatch" [style.background]="s.oldValue"></span>
                  <code>{{ s.oldValue }}</code>
                </td>
                <td>
                  <span class="wn-swatch" [style.background]="s.newValue"></span>
                  <code>{{ s.newValue }}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- ===== New tokens ===== -->
        <section class="wn-sec">
          <h3 class="wn-sec__h">New tokens <span class="wn-pill wn-pill--additive">Additive · no action</span></h3>
          <ul class="wn-list">
            <li><b>Border widths</b> — <code>border-none</code> (0) · <code>border-thin</code> (1px) · <code>border-medium</code> (2px) · <code>border-thick</code> (4px)</li>
            <li><b>Corner radius</b> — <code>none</code> (0) · <code>xl</code> (16px) · <code>2xl</code> (20px) · <code>full</code> (9999px)</li>
            <li><b>Graphics grays</b> — <code>color-graphics-gray-100</code> through <code>color-graphics-gray-500</code></li>
          </ul>
        </section>

        <!-- ===== Component changes ===== -->
        <section class="wn-sec wn-sec--components">
          <h3 class="wn-sec__h">Component changes</h3>
          <p class="wn-sec__intro">
            <span class="wn-pill wn-pill--breaking">Breaking</span> = code change required ·
            <span class="wn-pill wn-pill--additive">Additive</span> /
            <span class="wn-pill wn-pill--structural">Structural</span> /
            <span class="wn-pill wn-pill--visual">Visual</span>
          </p>

          <article *ngFor="let comp of componentChanges" class="wn-comp">
            <header class="wn-comp__head">
              <a *ngIf="comp.slug; else nolink"
                 [routerLink]="'/pds/components/' + comp.slug"
                 (click)="onClose()"
                 class="wn-comp__name">
                {{ comp.name }} <span class="wn-comp__arrow">→</span>
              </a>
              <ng-template #nolink>
                <span class="wn-comp__name wn-comp__name--plain">{{ comp.name }}</span>
              </ng-template>
              <span class="wn-pill" *ngFor="let t of comp.tags" [class]="'wn-pill wn-pill--' + t">{{ t }}</span>
            </header>
            <ul class="wn-comp__bullets">
              <li *ngFor="let b of comp.bullets" [innerHTML]="b"></li>
            </ul>
          </article>
        </section>

        <footer class="wn__foot">
          <a href="https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS/Component-Library-v2.5" target="_blank">
            Open Pegasus 2.5 Figma library ↗
          </a>
          <a href="https://www.figma.com/design/P59T9g1r4Z8bU5KgqQy5Oz/Pegasus-Design-System-v2.0" target="_blank">
            Open Pegasus 2.0 Figma library ↗
          </a>
        </footer>
      </div>
    </aside>
  `,
  styles: [`
    .wn {
      position: sticky;
      top: 64px;
      max-height: calc(100vh - 80px);
      background: #fff;
      border: 1px solid var(--ibx-line);
      border-radius: 12px;
      box-shadow: 0 4px 14px -8px rgba(11,26,43,0.10);
      display: flex; flex-direction: column;
      font-family: var(--ibx-font);
      overflow: hidden;
      align-self: start;
      opacity: 0;
      transform: translateX(8px);
      transition: opacity 220ms ease, transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .wn--open { opacity: 1; transform: translateX(0); }

    .wn__head {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: flex-start;
      padding: 24px 28px 18px;
      border-bottom: 1px solid var(--ibx-line);
    }
    .wn__eyebrow {
      display: inline-block;
      font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
      color: var(--pds-accent); text-transform: uppercase;
      background: rgba(0,112,210,0.08);
      padding: 4px 10px; border-radius: 100px;
      margin-bottom: 10px;
    }
    .wn__title { font-size: 24px; font-weight: 700; color: var(--ibx-ink); letter-spacing: -0.015em; margin: 0; }
    .wn__sub { font-size: 12.5px; color: var(--ibx-ink-3); margin-top: 4px; }
    .wn__close {
      width: 32px; height: 32px; border-radius: 8px;
      background: transparent; border: 1px solid var(--ibx-line);
      color: var(--ibx-ink-2); cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
      transition: background 120ms ease, border-color 120ms ease;
    }
    .wn__close:hover { background: var(--ibx-surface-2); color: var(--ibx-ink); border-color: var(--ibx-ink-3); }

    .wn__body {
      flex: 1;
      overflow-y: auto;
      padding: 8px 28px 32px;
    }

    .wn-sec { padding: 18px 0; border-bottom: 1px solid var(--ibx-line); }
    .wn-sec:last-of-type { border-bottom: none; }
    .wn-sec__h { font-size: 15px; font-weight: 600; color: var(--ibx-ink); margin: 0 0 12px; display: flex; align-items: center; gap: 10px; }
    .wn-sec__intro { font-size: 12.5px; color: var(--ibx-ink-2); margin: -6px 0 12px; }

    .wn-list { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; font-size: 13px; line-height: 1.55; color: var(--ibx-ink-2); }
    .wn-list b { color: var(--ibx-ink); font-weight: 600; }
    .wn-list i { color: var(--ibx-ink-3); }
    .wn-list code { background: var(--ibx-surface-2); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }

    .wn-tbl { width: 100%; border-collapse: collapse; font-size: 12.5px; }
    .wn-tbl th { text-align: left; font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3); padding: 6px 8px; border-bottom: 1px solid var(--ibx-line); font-weight: 600; }
    .wn-tbl td { padding: 8px; border-bottom: 1px solid var(--ibx-line); vertical-align: top; }
    .wn-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; }
    .wn-tbl__old { color: var(--ibx-ink-3); text-decoration: line-through; }
    .wn-tbl__new { color: var(--pds-accent); }
    .wn-tbl__desc { font-size: 11px; color: var(--ibx-ink-3); }
    .wn-swatch { display: inline-block; width: 12px; height: 12px; border-radius: 3px; border: 1px solid rgba(0,0,0,0.08); margin-right: 6px; vertical-align: -2px; }

    .wn-callout {
      background: rgba(244,124,32,0.06);
      border-left: 3px solid var(--ibx-orange);
      padding: 10px 14px; margin-top: 12px;
      font-size: 12.5px; color: var(--ibx-ink-2); line-height: 1.5;
    }
    .wn-callout code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }

    .wn-pill { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; padding: 2px 7px; border-radius: 100px; }
    .wn-pill--breaking   { background: rgba(226,35,26,0.10); color: #c41e15; }
    .wn-pill--additive   { background: rgba(46,200,130,0.12); color: #207a4d; }
    .wn-pill--structural { background: rgba(107,61,245,0.10); color: #5028d0; }
    .wn-pill--visual     { background: rgba(0,112,210,0.10); color: var(--pds-accent); }

    .wn-comp { padding: 12px 0; border-top: 1px dashed var(--ibx-line); }
    .wn-comp:first-of-type { border-top: none; }
    .wn-comp__head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
    .wn-comp__name { font-size: 14px; font-weight: 600; color: var(--pds-accent); text-decoration: none; }
    .wn-comp__name:hover { text-decoration: underline; }
    .wn-comp__name--plain { color: var(--ibx-ink); }
    .wn-comp__arrow { font-weight: 400; }
    .wn-comp__bullets { margin: 0; padding-left: 18px; font-size: 12.5px; color: var(--ibx-ink-2); line-height: 1.5; }
    .wn-comp__bullets li { margin: 3px 0; }
    .wn-comp__bullets code { background: var(--ibx-surface-2); padding: 1px 5px; border-radius: 3px; font-size: 11px; font-family: var(--ibx-mono); }

    .wn__foot {
      display: flex; flex-direction: column; gap: 6px;
      padding: 18px 0 4px;
      font-size: 12.5px;
    }
    .wn__foot a { color: var(--pds-accent); }
  `],
})
export class PdsWhatsNewPanelComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen) this.onClose();
  }

  onClose() {
    this.closed.emit();
  }

  tokenUpdates: TokenChange[] = [
    { token: 'gray-800', desc: 'primitive value', oldValue: '#424242', newValue: '#515151' },
    { token: 'color-text-tertiary', desc: 'alias → gray 600', oldValue: '#616161 (gray 700)', newValue: '#757575 (gray 600)' },
  ];

  semanticColors: TokenChange[] = [
    { token: 'color-text-secondary',   desc: '', oldValue: '#616161', newValue: '#424242' },
    { token: 'color-text-tertiary',    desc: '', oldValue: '#757575', newValue: '#616161' },
    { token: 'color-text-placeholder', desc: '', oldValue: '#9e9e9e', newValue: '#757575' },
    { token: 'color-text-disabled',    desc: '', oldValue: '#9e9e9e', newValue: '#bdbdbd' },
    { token: 'color-text-warning',     desc: '', oldValue: '#a97f13', newValue: '#7a5c00' },
    { token: 'color-text-critical',    desc: '', oldValue: '#c05700', newValue: '#914200' },
    { token: 'color-text-link-hover',  desc: '', oldValue: '#98cdfe', newValue: '#0e5aa1' },
    { token: 'color-icon-warning',     desc: '', oldValue: '#a97f13', newValue: '#7a5c00' },
    { token: 'color-icon-critical',    desc: '', oldValue: '#ef6c00', newValue: '#c05700' },
    { token: 'color-border-focused',   desc: '', oldValue: '#98cdfe', newValue: '#0171da' },
  ];

  componentChanges: ComponentChange[] = [
    { name: 'Accordion', slug: 'accordion', tags: ['structural'], bullets: [
      'Promoted to variant set (<code>Expanded=True/False</code>); description area replaced by SLOT <code>"Content"</code> prop.',
      '<b>Action:</b> Update Code Connect.',
    ]},
    { name: 'Background Process Card', slug: 'background-process-card', tags: ['visual'], bullets: [
      'Title size 20→16px; status label size 16→14px; metadata/timestamp colors <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Breadcrumbs', slug: 'breadcrumbs', tags: ['structural'], bullets: [
      'Child instances renamed <code>"Breadcrumb"</code> → <code>"Breadcrumb - Atom"</code> — check Code Connect node refs if targeting by name.',
    ]},
    { name: 'Button', slug: 'buttons', tags: ['additive', 'structural'], bullets: [
      '<b>Additive:</b> Loading state added (6 new variants across all button types).',
      '<b>Structural:</b> Placeholder icon changed from ELLIPSE → FA7 Pro Regular <code>circle</code> text node.',
      '<i>Note:</i> Verify Font Awesome 7 Pro Regular is available in your environment.',
    ]},
    { name: 'Checkbox', slug: 'checkbox', tags: ['structural'], bullets: [
      'Hidden <code>"Long Label"</code> text node removed from all variants — check Code Connect node refs if targeting by name.',
    ]},
    { name: 'Data Table', slug: 'data-table', tags: ['additive'], bullets: [
      'New <code>Shutter Table / Table Template</code> wrapper component with slot-based row injection; existing row atom unchanged.',
    ]},
    { name: 'Dropdown', slug: 'dropdown-menu', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Dual Listbox', slug: 'dual-listbox', tags: ['additive'], bullets: [
      '<code>Search</code> (BOOLEAN) prop added for inline per-column search.',
    ]},
    { name: 'Filter & Action Row', slug: 'filter-action-row', tags: ['breaking'], bullets: [
      '<b>Breaking:</b> Prop <code>Infoblox IQ</code> (BOOLEAN) removed — remove from Code Connect / prop mappings.',
    ]},
    { name: 'Icon Toggle', tags: ['visual'], bullets: [
      'Trends=On active label <code>#f0efe9→#212121</code>; disabled label <code>#9e9e9e→#bdbdbd</code>.',
    ]},
    { name: 'Inline Message', slug: 'inline-message', tags: ['visual'], bullets: [
      'Corner radius <code>0→4px</code> (all variants).',
    ]},
    { name: 'List Table Template', tags: ['structural'], bullets: [
      'Promoted from FRAME to COMPONENT; hardcoded rows replaced by SLOT <code>"Row Wrapper"</code>.',
      '<b>Action:</b> Update Code Connect.',
    ]},
    { name: 'Menu List', tags: ['structural', 'visual'], bullets: [
      '<b>Structural:</b> Placeholder icons changed from FA6 Pro Light → FA7 Pro Regular — verify available.',
      '<b>Visual:</b> Shadow simplified to single layer; row padding 6→8px vertical.',
    ]},
    { name: 'Modals — Large', slug: 'modals', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Hardcoded FRAME <code>"Body Container"</code> replaced by SLOT <code>"Content"</code> prop — update Code Connect body mapping.',
      '<b>Visual:</b> Corner radius <code>0→8px</code>; drop shadow added (<code>y:8/blur:16/#000029@16%</code>).',
    ]},
    { name: 'Modals — Medium', slug: 'modals', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Hardcoded FRAME <code>"Body Container"</code> replaced by SLOT <code>"Content"</code> prop — update Code Connect body mapping.',
      '<b>Visual:</b> Drop shadow updated to <code>y:8/blur:16/#000029@16%</code>.',
    ]},
    { name: 'Modals — Small', slug: 'modals', tags: ['breaking'], bullets: [
      '<b>Breaking:</b> Prop <code>Checkbox</code> (BOOLEAN) removed; <code>Type</code> option <code>User Selection</code> removed, <code>Copy</code> added — update Code Connect and any branching logic on User Selection.',
    ]},
    { name: 'Modals — Inline', slug: 'modals', tags: ['visual'], bullets: [
      'Dark mode section separator padding <code>2→0px</code>.',
    ]},
    { name: 'Notification Panel', slug: 'notification-panel', tags: ['structural'], bullets: [
      'Close (<code>xmark</code>) button added to Icons frame; header title frame width 384→352px.',
    ]},
    { name: 'Number Input', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Perspective Nav', slug: 'perspective-nav', tags: ['additive'], bullets: [
      '<code>Collapsed</code> (VARIANT) prop added; <code>Collapsed=Yes</code> variant added.',
    ]},
    { name: 'Phone Number', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Primary & Secondary Navigation Bar', slug: 'primary-secondary-nav', tags: ['additive', 'structural'], bullets: [
      '<b>Additive:</b> EASM focus option + 4 new variants; Axur and EASM nav strip items added.',
      '<b>Structural:</b> "Operations" promoted from Network sub-item → standalone top-level menu item; expanded panel font size 12→14px.',
      '<b>Action:</b> Update if branching on <code>Focus</code> prop.',
    ]},
    { name: 'Radio Button', slug: 'radio', tags: ['visual'], bullets: [
      'Container padding <code>4→2px</code> all sides.',
    ]},
    { name: 'Simple Search', slug: 'simple-search', tags: ['visual'], bullets: [
      'Placeholder/button/border colors updated to match PDS 2.5 token values.',
    ]},
    { name: 'Single Button Toggle', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Selected Button options renamed — <code>Button 1/2/3</code> → <code>Start/Middle/End</code> — update all prop value references.',
      '<b>Visual:</b> Placeholder icon FA6 Pro Light → FA7 Pro Regular; disabled text <code>#9e9e9e→#bdbdbd</code>.',
    ]},
    { name: 'Step (was: Vertical Stepper)', tags: ['breaking', 'additive', 'structural'], bullets: [
      '<b>Breaking:</b> Full redesign — props <code>Title</code>, <code>Description</code>, <code>Sub-text</code> removed; all 20 variant names replaced.',
      '<b>Additive:</b> <code>Chevron</code> (BOOLEAN), <code>Optional</code> (BOOLEAN), <code>Interaction</code> (Default/Hover) added.',
      '<b>Structural:</b> Width 200→144px; description row removed; gap 16→4; padding <code>0/16/0/16 → 0/8/0/0</code>.',
      '<b>Action:</b> Retire all old Code Connect mappings — treat as a new component.',
    ]},
    { name: 'Switch', slug: 'toggle-switch', tags: ['visual'], bullets: [
      'Disabled label <code>#9e9e9e→#bdbdbd</code>; Two-Way off-label <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Text (input)', slug: 'text-fields', tags: ['additive', 'visual'], bullets: [
      '<b>Additive:</b> Read-Only and Read-Only Hover state variants added.',
      '<b>Visual:</b> Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Text Area', slug: 'text-fields', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code> (token update).',
    ]},
    { name: 'Timeline', slug: 'timeline', tags: ['visual'], bullets: [
      'Date/sub text <code>#616161→#424242</code>; interval dot stroke <code>#757575→#616161</code> (token update).',
    ]},
    { name: 'Toastbar', slug: 'toastbar', tags: ['visual'], bullets: [
      'Corner radius <code>8→4px</code>; warning icon <code>#a97f13→#7a5c00</code> (token update).',
    ]},
    { name: 'Two Button Toggle', tags: ['visual'], bullets: [
      'Placeholder icon FA6 Pro Light → FA7 Pro Regular — verify Font Awesome 7 Pro Regular is available.',
    ]},
    { name: 'Wizard', slug: 'wizard', tags: ['structural'], bullets: [
      'Promoted from static FRAME to COMPONENT; hardcoded steps replaced by SLOT <code>"Step"</code>; width 276→304px; padding <code>0→16</code> all sides; drop shadow added.',
      '<b>Action:</b> Update Code Connect.',
    ]},
  ];
}
