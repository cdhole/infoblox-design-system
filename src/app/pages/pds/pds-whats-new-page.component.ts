import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageTocComponent, TocItem } from '../../shared/page-toc.component';

type ChangeTag = 'breaking' | 'additive' | 'structural' | 'visual';

interface ComponentChange {
  name: string;
  slug?: string;
  tags: ChangeTag[];
  bullets: string[];
}

interface TokenChange {
  token: string;
  desc?: string;
  oldValue: string;
  newValue: string;
}

@Component({
  selector: 'app-pds-whats-new-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTocComponent],
  styleUrls: ['../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / What's new</nav>
        <h1 class="cp__title">What's new in Pegasus 2.5</h1>
        <div class="cp__sub">From PDS 2.0 to 2.5 · Tokens &amp; Components · May 13, 2026</div>
        <div class="cp__tags">
          <span class="cp__tag">Release notes</span>
          <span class="cp__tag">Version 2.5</span>
          <span class="cp__tag">Breaking changes inside</span>
        </div>
      </div>

      <div class="cp__layout">
        <div class="cp__content">

          <section id="intro">
            <h2 class="cp__h2">Overview</h2>
            <p class="cp__lead">
              Pegasus 2.5 is a tokens-and-components refresh. Ten semantic color values shifted, a
              cluster of token paths were renamed, several elevation/size token groups were retired,
              and 30+ components received either visual, structural, or breaking changes. Search
              every codebase for hardcoded hex values that match the "Old" column below.
            </p>
            <div class="cl-meta">
              <div><span class="cl-meta__k">Released</span> May 13, 2026</div>
              <div><span class="cl-meta__k">Figma file</span> <a href="https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS/Component-Library-v2.5" target="_blank">Component-Library-v2.5 ↗</a></div>
              <div><span class="cl-meta__k">Previous</span> <a href="https://www.figma.com/design/P59T9g1r4Z8bU5KgqQy5Oz/Pegasus-Design-System-v2.0" target="_blank">PDS 2.0 ↗</a></div>
            </div>
          </section>

          <section id="token-updates">
            <h2 class="cp__h2">Token value updates</h2>
            <table class="cl-tbl">
              <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
              <tbody>
                <tr *ngFor="let t of tokenUpdates">
                  <td>
                    <code>{{ t.token }}</code>
                    <span class="cl-tbl__note" *ngIf="t.desc">{{ t.desc }}</span>
                  </td>
                  <td>
                    <span class="cl-sw" [style.background]="extractHex(t.oldValue) || '#fff'"
                          [style.box-shadow]="extractHex(t.oldValue) ? 'inset 0 0 0 1px rgba(0,0,0,0.08)' : 'inset 0 0 0 1px var(--ibx-line)'"></span>
                    <code>{{ t.oldValue }}</code>
                  </td>
                  <td>
                    <span class="cl-sw" [style.background]="extractHex(t.newValue) || '#fff'"
                          [style.box-shadow]="extractHex(t.newValue) ? 'inset 0 0 0 1px rgba(0,0,0,0.08)' : 'inset 0 0 0 1px var(--ibx-line)'"></span>
                    <code>{{ t.newValue }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="cl-callout">
              <code>color-text-secondary</code> links to <code>gray-800</code> — its resolved value also changes to <code>#515151</code>. Run visual regression tests and update any hardcoded hex fallbacks.
            </p>
          </section>

          <section id="token-breaking">
            <h2 class="cp__h2">Token breaking changes <span class="cl-pill cl-pill--breaking">Action required</span></h2>
            <ul class="cl-list">
              <li><b>Color paths renamed</b> — <code>colors/01 text/…</code> → <code>colors/text/…</code> (same for 02–06 prefixes, both light &amp; dark mode). <i>Find &amp; replace prefixes in any token pipeline, style dictionary, or CSS var generator.</i></li>
              <li><b>Corner radius shifted</b> — <code>sm</code> 4→2px · <code>md</code> 8→4px · <code>lg</code> 16→8px. <i>Audit <code>lg</code> usage (cards, modals, panels); use new <code>xl</code> (16px) to preserve old <code>lg</code> appearance.</i></li>
              <li><b>Elevation tokens deleted</b> — <code>sm/md/lg-core/cast</code> (24 tokens, no replacement). <i>Apply shadows directly in code until a replacement token is introduced.</i></li>
              <li><b>Component size tokens deleted</b> — Button/Input/Icon/DataTable/Chips heights &amp; widths (48 tokens, no replacement). <i>Replace with hardcoded values or spacing tokens.</i></li>
              <li><b>Spacing restructured</b> — <code>padding.*</code> group + most <code>01 spacing</code> tokens removed; 10 flat pixel-named tokens remain (<code>2px</code>–<code>48px</code>).</li>
              <li><b>Font sizes removed</b> — <code>font.size.3xs</code> (8px) · <code>font.size.2xs</code> (11px). <i>Smallest is now <code>font.size.xs = 12px</code>.</i></li>
            </ul>
          </section>

          <section id="semantic-colors">
            <h2 class="cp__h2">Semantic color value changes</h2>
            <p class="cp__p">10 semantic tokens shifted. Run visual regression tests. Update any hardcoded hex fallbacks.</p>
            <table class="cl-tbl">
              <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
              <tbody>
                <tr *ngFor="let s of semanticColors">
                  <td><code>{{ s.token }}</code></td>
                  <td>
                    <span class="cl-sw" [style.background]="s.oldValue"></span>
                    <code>{{ s.oldValue }}</code>
                  </td>
                  <td>
                    <span class="cl-sw" [style.background]="s.newValue"></span>
                    <code>{{ s.newValue }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="new-tokens">
            <h2 class="cp__h2">New tokens <span class="cl-pill cl-pill--additive">Additive · no action</span></h2>
            <ul class="cl-list">
              <li><b>Border widths</b> — <code>border-none</code> (0) · <code>border-thin</code> (1px) · <code>border-medium</code> (2px) · <code>border-thick</code> (4px)</li>
              <li><b>Corner radius</b> — <code>none</code> (0) · <code>xl</code> (16px) · <code>2xl</code> (20px) · <code>full</code> (9999px)</li>
              <li><b>Graphics grays</b> — <code>color-graphics-gray-100</code> through <code>color-graphics-gray-500</code></li>
            </ul>
          </section>

          <section id="component-changes">
            <h2 class="cp__h2">Component changes <span class="cl-meta__count">{{ componentChanges.length }}</span></h2>
            <p class="cp__p">
              <span class="cl-pill cl-pill--breaking">Breaking</span> = code change required ·
              <span class="cl-pill cl-pill--additive">Additive</span> /
              <span class="cl-pill cl-pill--structural">Structural</span> /
              <span class="cl-pill cl-pill--visual">Visual</span>
            </p>

            <div class="cl-comps">
              <article *ngFor="let comp of componentChanges" class="cl-comp">
                <header class="cl-comp__head">
                  <a *ngIf="comp.slug; else nolink"
                     [routerLink]="'/pds/components/' + comp.slug"
                     class="cl-comp__name">
                    {{ comp.name }} <span class="cl-comp__arrow">→</span>
                  </a>
                  <ng-template #nolink>
                    <span class="cl-comp__name cl-comp__name--plain">{{ comp.name }}</span>
                  </ng-template>
                  <span class="cl-pill" *ngFor="let t of comp.tags" [class]="'cl-pill cl-pill--' + t">{{ t }}</span>
                </header>
                <ul class="cl-comp__bullets">
                  <li *ngFor="let b of comp.bullets" [innerHTML]="b"></li>
                </ul>
              </article>
            </div>
          </section>

        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
  styles: [`
    .cp__lead a { color: var(--pds-accent); }
    .cp__p code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 12.5px; }

    .cl-meta {
      margin-top: 14px;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 10px;
      background: var(--ibx-surface-2); border: 1px solid var(--ibx-line);
      border-radius: var(--r-md); padding: 12px 16px;
      font-size: 13px; color: var(--ibx-ink-2);
    }
    .cl-meta__k {
      display: block; font-size: 10.5px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3);
      margin-bottom: 2px;
    }
    .cl-meta a { color: var(--pds-accent); }
    .cl-meta__count {
      display: inline-block; margin-left: 8px;
      font-family: var(--ibx-mono); font-size: 12px; font-weight: 500;
      color: var(--ibx-ink-3); background: var(--ibx-surface-2);
      padding: 2px 9px; border-radius: 100px;
      vertical-align: 2px;
    }

    .cl-tbl { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px; }
    .cl-tbl th {
      text-align: left; font-size: 11px; text-transform: uppercase;
      letter-spacing: 0.06em; color: var(--ibx-ink-3); font-weight: 600;
      padding: 8px 12px; background: var(--ibx-surface-2);
      border-bottom: 1px solid var(--ibx-line);
    }
    .cl-tbl td { padding: 10px 12px; border-bottom: 1px solid var(--ibx-line); vertical-align: middle; }
    .cl-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .cl-tbl__note { display: block; font-size: 11px; color: var(--ibx-ink-3); margin-top: 2px; font-style: italic; }
    .cl-sw { display: inline-block; width: 14px; height: 14px; border-radius: 3px; margin-right: 8px; vertical-align: -3px; }
    .cl-callout {
      background: rgba(244,124,32,0.06);
      border-left: 3px solid var(--ibx-orange);
      padding: 10px 14px; margin-top: 12px;
      font-size: 12.5px; color: var(--ibx-ink-2);
    }
    .cl-callout code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }

    .cl-pill {
      display: inline-block;
      font-size: 10.5px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.04em; padding: 2px 8px; border-radius: 100px;
      background: var(--ibx-surface-3); color: var(--ibx-ink-2);
      vertical-align: 2px;
    }
    .cl-pill--breaking   { background: rgba(226,35,26,0.12); color: #c41e15; }
    .cl-pill--additive   { background: rgba(46,200,130,0.14); color: #207a4d; }
    .cl-pill--structural { background: rgba(107,61,245,0.10); color: #5028d0; }
    .cl-pill--visual     { background: rgba(0,112,210,0.10); color: var(--pds-accent); }

    .cl-list { margin: 8px 0 0; padding-left: 20px; font-size: 13.5px; color: var(--ibx-ink-2); line-height: 1.6; display: flex; flex-direction: column; gap: 8px; }
    .cl-list b { color: var(--ibx-ink); font-weight: 600; }
    .cl-list i { color: var(--ibx-ink-3); }
    .cl-list code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 11.5px; }

    .cl-comps {
      margin-top: 14px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 14px;
    }
    .cl-comp {
      background: #fff; border: 1px solid var(--ibx-line); border-radius: var(--r-md);
      padding: 14px 16px;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }
    .cl-comp:hover { border-color: var(--ibx-ink-3); box-shadow: var(--shadow-1); }
    .cl-comp__head { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
    .cl-comp__name { font-size: 14px; font-weight: 600; color: var(--pds-accent); text-decoration: none; }
    .cl-comp__name:hover { text-decoration: underline; }
    .cl-comp__name--plain { color: var(--ibx-ink); }
    .cl-comp__arrow { font-weight: 400; opacity: 0.7; }
    .cl-comp__bullets { margin: 0; padding-left: 18px; font-size: 12.5px; color: var(--ibx-ink-2); line-height: 1.55; display: flex; flex-direction: column; gap: 3px; }
    .cl-comp__bullets code { background: var(--ibx-surface-2); padding: 1px 5px; border-radius: 3px; font-size: 11px; font-family: var(--ibx-mono); }
  `],
})
export class PdsWhatsNewPageComponent {
  toc: TocItem[] = [
    { id: 'intro', label: 'Overview' },
    { id: 'token-updates', label: 'Token value updates' },
    { id: 'token-breaking', label: 'Token breaking changes' },
    { id: 'semantic-colors', label: 'Semantic color changes' },
    { id: 'new-tokens', label: 'New tokens' },
    { id: 'component-changes', label: 'Component changes' },
  ];

  /** Pull "#xxxxxx" out of label text like "#616161 (gray 700)" for swatch rendering. */
  extractHex(s: string): string | null {
    const m = s.match(/#[0-9a-fA-F]{6}/);
    return m ? m[0] : null;
  }

  tokenUpdates: TokenChange[] = [
    { token: 'gray-800', desc: 'primitive value', oldValue: '#424242', newValue: '#515151' },
    { token: 'color-text-tertiary', desc: 'alias → gray 600', oldValue: '#616161 (gray 700)', newValue: '#757575 (gray 600)' },
  ];

  semanticColors: TokenChange[] = [
    { token: 'color-text-secondary',   oldValue: '#616161', newValue: '#424242' },
    { token: 'color-text-tertiary',    oldValue: '#757575', newValue: '#616161' },
    { token: 'color-text-placeholder', oldValue: '#9e9e9e', newValue: '#757575' },
    { token: 'color-text-disabled',    oldValue: '#9e9e9e', newValue: '#bdbdbd' },
    { token: 'color-text-warning',     oldValue: '#a97f13', newValue: '#7a5c00' },
    { token: 'color-text-critical',    oldValue: '#c05700', newValue: '#914200' },
    { token: 'color-text-link-hover',  oldValue: '#98cdfe', newValue: '#0e5aa1' },
    { token: 'color-icon-warning',     oldValue: '#a97f13', newValue: '#7a5c00' },
    { token: 'color-icon-critical',    oldValue: '#ef6c00', newValue: '#c05700' },
    { token: 'color-border-focused',   oldValue: '#98cdfe', newValue: '#0171da' },
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
    ]},
    { name: 'Menu List', tags: ['structural', 'visual'], bullets: [
      '<b>Structural:</b> Placeholder icons changed from FA6 Pro Light → FA7 Pro Regular.',
      '<b>Visual:</b> Shadow simplified to single layer; row padding 6→8px vertical.',
    ]},
    { name: 'Modals — Large', slug: 'modals', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Hardcoded FRAME <code>"Body Container"</code> replaced by SLOT <code>"Content"</code> prop.',
      '<b>Visual:</b> Corner radius <code>0→8px</code>; drop shadow added (<code>y:8/blur:16/#000029@16%</code>).',
    ]},
    { name: 'Modals — Medium', slug: 'modals', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Hardcoded FRAME <code>"Body Container"</code> replaced by SLOT <code>"Content"</code> prop.',
      '<b>Visual:</b> Drop shadow updated to <code>y:8/blur:16/#000029@16%</code>.',
    ]},
    { name: 'Modals — Small', slug: 'modals', tags: ['breaking'], bullets: [
      '<b>Breaking:</b> Prop <code>Checkbox</code> (BOOLEAN) removed; <code>Type</code> option <code>User Selection</code> removed, <code>Copy</code> added.',
    ]},
    { name: 'Modals — Inline', slug: 'modals', tags: ['visual'], bullets: [
      'Dark mode section separator padding <code>2→0px</code>.',
    ]},
    { name: 'Notification Panel', slug: 'notification-panel', tags: ['structural'], bullets: [
      'Close (<code>xmark</code>) button added to Icons frame; header title frame width 384→352px.',
    ]},
    { name: 'Number Input', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code>.',
    ]},
    { name: 'Perspective Nav', slug: 'perspective-nav', tags: ['additive'], bullets: [
      '<code>Collapsed</code> (VARIANT) prop added; <code>Collapsed=Yes</code> variant added.',
    ]},
    { name: 'Phone Number', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code>.',
    ]},
    { name: 'Primary & Secondary Navigation Bar', slug: 'primary-secondary-nav', tags: ['additive', 'structural'], bullets: [
      '<b>Additive:</b> EASM focus option + 4 new variants; Axur and EASM nav strip items added.',
      '<b>Structural:</b> "Operations" promoted to standalone top-level menu item; expanded panel font 12→14px.',
    ]},
    { name: 'Radio Button', slug: 'radio', tags: ['visual'], bullets: [
      'Container padding <code>4→2px</code> all sides.',
    ]},
    { name: 'Simple Search', slug: 'simple-search', tags: ['visual'], bullets: [
      'Placeholder/button/border colors updated to match PDS 2.5 token values.',
    ]},
    { name: 'Single Button Toggle', tags: ['breaking', 'visual'], bullets: [
      '<b>Breaking:</b> Selected Button options renamed — <code>Button 1/2/3</code> → <code>Start/Middle/End</code>.',
      '<b>Visual:</b> Placeholder icon FA6 → FA7; disabled text <code>#9e9e9e→#bdbdbd</code>.',
    ]},
    { name: 'Step (was: Vertical Stepper)', tags: ['breaking', 'additive', 'structural'], bullets: [
      '<b>Breaking:</b> Full redesign — props <code>Title</code>, <code>Description</code>, <code>Sub-text</code> removed; all 20 variant names replaced.',
      '<b>Additive:</b> <code>Chevron</code>, <code>Optional</code>, <code>Interaction</code> (Default/Hover) added.',
      '<b>Structural:</b> Width 200→144px; description row removed; gap 16→4; padding restructured.',
    ]},
    { name: 'Switch', slug: 'toggle-switch', tags: ['visual'], bullets: [
      'Disabled label <code>#9e9e9e→#bdbdbd</code>; Two-Way off-label <code>#757575→#616161</code>.',
    ]},
    { name: 'Text (input)', slug: 'text-fields', tags: ['additive', 'visual'], bullets: [
      '<b>Additive:</b> Read-Only and Read-Only Hover state variants added.',
      '<b>Visual:</b> Label <code>#616161→#424242</code>; helper text <code>#757575→#616161</code>.',
    ]},
    { name: 'Text Area', slug: 'text-fields', tags: ['visual'], bullets: [
      'Label <code>#616161→#424242</code>.',
    ]},
    { name: 'Timeline', slug: 'timeline', tags: ['visual'], bullets: [
      'Date/sub text <code>#616161→#424242</code>; interval dot stroke <code>#757575→#616161</code>.',
    ]},
    { name: 'Toastbar', slug: 'toastbar', tags: ['visual'], bullets: [
      'Corner radius <code>8→4px</code>; warning icon <code>#a97f13→#7a5c00</code>.',
    ]},
    { name: 'Two Button Toggle', tags: ['visual'], bullets: [
      'Placeholder icon FA6 Pro Light → FA7 Pro Regular.',
    ]},
    { name: 'Wizard', slug: 'wizard', tags: ['structural'], bullets: [
      'Promoted from static FRAME to COMPONENT; hardcoded steps replaced by SLOT <code>"Step"</code>; width 276→304px; padding <code>0→16</code> all sides; drop shadow added.',
    ]},
  ];
}
