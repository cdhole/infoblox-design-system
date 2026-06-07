import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { PDS_COLOR_GROUPS, PDS_COLOR_SYNC_META, ColorGroup } from './pds-color-tokens';
import { pdsFigmaUrl } from '../pds-components';

@Component({
  selector: 'app-color-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTocComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / Foundations / Color</nav>
        <h1 class="cp__title">Color</h1>
        <div class="cp__sub">{{ totalCount }} tokens · {{ syncMeta.variableCollection }} collection · {{ syncMeta.source }}</div>
        <div class="cp__tags">
          <span class="cp__tag">Foundation</span>
          <span class="cp__tag">Version 2.5</span>
          <span class="cp__tag">Synced {{ syncMeta.lastSynced }}</span>
          <a [href]="figmaUrl" target="_blank" rel="noopener" class="cp__figma">
            <span class="cp__figma__icon">
              <svg width="11" height="16" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12a4 4 0 1 1 4 4 4 4 0 0 1-4-4z" fill="#1abcfe"/>
                <path d="M0 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0z" fill="#0acf83"/>
                <path d="M8 0v8h4a4 4 0 0 0 0-8z" fill="#ff7262"/>
                <path d="M0 4a4 4 0 0 0 4 4h4V0H4a4 4 0 0 0-4 4z" fill="#f24e1e"/>
                <path d="M0 12a4 4 0 0 0 4 4h4V8H4a4 4 0 0 0-4 4z" fill="#a259ff"/>
              </svg>
            </span>
            View in Figma
            <span class="cp__figma__arrow">↗</span>
          </a>
        </div>
      </div>

      <div class="cp__layout">
        <div class="cp__content">

          <section id="intro">
            <h2 class="cp__h2">Intro</h2>
            <p class="cp__lead">Semantic color tokens. Synced from the Figma <code>{{ syncMeta.variableCollection }}</code> collection.</p>
          </section>

          <section *ngFor="let g of groups" [id]="g.id">
            <h2 class="cp__h2">{{ g.title }} <span class="grp-count">{{ g.tokens.length }}</span></h2>
            <p class="cp__p">{{ g.description }}</p>
            <div class="tok-grid">
              <article *ngFor="let t of g.tokens" class="tok">
                <div class="tok__swatch" [style.background]="t.hex"
                     [class.tok__swatch--light]="isLight(t.hex)">
                  <span *ngIf="t.changedIn25" class="tok__badge" title="Value updated in PDS 2.5">2.5</span>
                </div>
                <div class="tok__meta">
                  <div class="tok__name">{{ t.name }}</div>
                  <div class="tok__hex">
                    <code>{{ t.hex }}</code>
                    <span class="tok__conf"
                          [class.tok__conf--verified]="t.confidence === 'verified'"
                          [title]="confTooltip(t.confidence)">
                      {{ t.confidence === 'verified' ? '✓ verified' : '~ inferred' }}
                    </span>
                  </div>
                  <div class="tok__desc">{{ t.description }}</div>
                </div>
              </article>
            </div>
          </section>

          <section id="changelog">
            <h2 class="cp__h2">Changelog</h2>
            <p class="cp__p">
              Color changes across Pegasus releases. Click any entry to expand details.
              Most recent first.
            </p>

            <div class="ch-log">
              <details *ngFor="let entry of changelog; let i = index"
                       class="ch-entry"
                       [open]="i === 0">
                <summary class="ch-entry__head">
                  <span class="ch-entry__chev" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                  <div class="ch-entry__meta">
                    <div class="ch-entry__line1">
                      <span class="ch-entry__version">{{ entry.version }}</span>
                      <span class="ch-entry__date">{{ entry.date }}</span>
                      <span *ngIf="entry.tags?.includes('breaking')" class="ch-pill ch-pill--breaking">Breaking</span>
                      <span *ngIf="entry.tags?.includes('additive')" class="ch-pill ch-pill--add">Additive</span>
                    </div>
                    <div class="ch-entry__title">{{ entry.title }}</div>
                    <div *ngIf="entry.summary" class="ch-entry__summary">{{ entry.summary }}</div>
                  </div>
                </summary>

                <div class="ch-entry__body">
                  <!-- 2.0 → 2.5 release content -->
                  <ng-container *ngIf="entry.id === '2.5.0'">
                    <h4 class="ch-h4">Primitive value updated</h4>
                    <table class="ch-tbl">
                      <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
                      <tbody>
                        <tr>
                          <td><code>gray-800</code><span class="ch-tbl__note">primitive value</span></td>
                          <td><span class="ch-sw" style="background:#424242"></span><code>#424242</code></td>
                          <td><span class="ch-sw" style="background:#515151"></span><code>#515151</code></td>
                        </tr>
                      </tbody>
                    </table>
                    <p class="cp__p ch-callout">
                      <code>color-text-secondary</code> aliases to <code>gray-800</code>, so its resolved value
                      also shifted to <code>#515151</code>.
                    </p>

                    <h4 class="ch-h4">Alias re-pointed</h4>
                    <table class="ch-tbl">
                      <thead><tr><th>Token</th><th>Old alias</th><th>New alias</th></tr></thead>
                      <tbody>
                        <tr>
                          <td><code>color-text-tertiary</code></td>
                          <td><code>gray-700</code> <span class="ch-tbl__note">(#616161)</span></td>
                          <td><code>gray-600</code> <span class="ch-tbl__note">(#757575)</span></td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 class="ch-h4">Semantic value changes <span class="ch-pill">10 tokens</span></h4>
                    <table class="ch-tbl">
                      <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
                      <tbody>
                        <tr *ngFor="let r of semanticChanges">
                          <td><code>{{ r.token }}</code></td>
                          <td><span class="ch-sw" [style.background]="r.old"></span><code>{{ r.old }}</code></td>
                          <td><span class="ch-sw" [style.background]="r.new"></span><code>{{ r.new }}</code></td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 class="ch-h4">Breaking · token paths renamed</h4>
                    <p class="cp__p">
                      Color tokens are no longer numbered. Update any token pipeline, style dictionary, or
                      CSS-var generator that targets the old prefixes.
                    </p>
                    <table class="ch-tbl">
                      <thead><tr><th>Old path</th><th>New path</th></tr></thead>
                      <tbody>
                        <tr *ngFor="let r of pathRenames">
                          <td><code>{{ r.old }}</code></td>
                          <td><code>{{ r.new }}</code></td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 class="ch-h4">New tokens · additive <span class="ch-pill ch-pill--add">No action</span></h4>
                    <ul class="ch-list">
                      <li><b>Graphics grays</b> — five new tokens reserved for illustrations and decorative graphics, separate from text/border grays. See the <a href="#graphics">Graphics gray</a> section above.</li>
                      <li><b>Corner radius</b> — <code>none</code> (0), <code>xl</code> (16px), <code>2xl</code> (20px), <code>full</code> (9999px). Use <code>xl</code> to preserve the previous <code>lg</code> appearance.</li>
                      <li><b>Border widths</b> — <code>border-none</code>, <code>border-thin</code> (1px), <code>border-medium</code> (2px), <code>border-thick</code> (4px).</li>
                    </ul>

                    <h4 class="ch-h4">Heads-up <span class="ch-pill ch-pill--warn">Run visual regression</span></h4>
                    <ul class="ch-list">
                      <li>Search every codebase for the 10 hex values in the "Old" column above — any hardcoded usage will not auto-update.</li>
                      <li><code>color-text-secondary</code>'s resolved value also changes because the primitive shifted, even though the alias didn't.</li>
                      <li>Focus rings (<code>color-border-focused</code>) went from <code>#98cdfe</code> (light) to <code>#0171da</code> (saturated blue) — the visual contrast jump is significant.</li>
                    </ul>
                  </ng-container>

                  <!-- Future / placeholder entries — engineer fills these in as PDS 2.5.x ships -->
                  <ng-container *ngIf="entry.id !== '2.5.0'">
                    <p class="cp__p ch-placeholder">
                      Notes for this entry are in draft. Edit
                      <code>color-page.component.ts → changelog[]</code> to add tables, swatches, or callouts.
                    </p>
                  </ng-container>
                </div>
              </details>
            </div>
          </section>


        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
  styles: [`
    .cp__p code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 12.5px; }
    .cp__p a { color: var(--pds-accent); }

    .sync-card {
      margin-top: 18px;
      background: var(--ibx-surface-2);
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      padding: 14px 16px;
      font-size: 13px;
      display: grid; gap: 8px;
    }
    .sync-card__row { display: grid; grid-template-columns: 110px 1fr; align-items: center; gap: 10px; }
    .sync-card__label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3); }
    .sync-card code { background: #fff; padding: 2px 8px; border-radius: 4px; font-size: 12px; }

    .grp-count {
      display: inline-block; margin-left: 8px;
      font-family: var(--ibx-mono); font-size: 11px; font-weight: 500;
      color: var(--ibx-ink-3); background: var(--ibx-surface-2);
      padding: 2px 8px; border-radius: 100px;
      vertical-align: middle;
    }

    .tok-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 12px;
      margin-top: 14px;
    }
    .tok {
      display: flex; gap: 12px; align-items: stretch;
      padding: 10px;
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      background: #fff;
      transition: border-color 120ms ease, box-shadow 120ms ease;
    }
    .tok:hover { border-color: var(--ibx-ink-3); box-shadow: var(--shadow-1); }
    .tok__swatch {
      position: relative;
      width: 72px; min-height: 72px;
      flex-shrink: 0;
      border-radius: 8px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06);
    }
    .tok__swatch--light { box-shadow: inset 0 0 0 1px var(--ibx-line); }
    .tok__badge {
      position: absolute; top: 4px; right: 4px;
      background: var(--ibx-orange);
      color: #fff;
      font-size: 9px; font-weight: 700; letter-spacing: 0.03em;
      padding: 1px 5px;
      border-radius: 100px;
    }
    .tok__meta { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .tok__name { font-family: var(--ibx-mono); font-size: 12px; font-weight: 600; color: var(--ibx-ink); }
    .tok__hex { display: flex; align-items: center; gap: 8px; }
    .tok__hex code { font-family: var(--ibx-mono); font-size: 11.5px; color: var(--ibx-ink-2); }
    .tok__conf {
      font-size: 10px; padding: 1px 6px; border-radius: 100px;
      background: var(--ibx-surface-2); color: var(--ibx-ink-3);
      letter-spacing: 0.02em;
    }
    .tok__conf--verified { background: rgba(46,139,87,0.12); color: #207a4d; }
    .tok__desc { font-size: 12px; color: var(--ibx-ink-3); line-height: 1.45; margin-top: 2px; }

    .sync-list { margin: 8px 0 0; padding-left: 20px; font-size: 13.5px; color: var(--ibx-ink-2); line-height: 1.6; display: flex; flex-direction: column; gap: 6px; }
    .sync-list code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 12px; }

    /* Changelog ===== */
    .ch-tbl { width: 100%; border-collapse: collapse; margin: 8px 0 14px; font-size: 13px; }
    .ch-tbl th {
      text-align: left;
      font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;
      color: var(--ibx-ink-3); font-weight: 600;
      padding: 8px 12px;
      background: var(--ibx-surface-2);
      border-bottom: 1px solid var(--ibx-line);
    }
    .ch-tbl td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--ibx-line);
      vertical-align: middle;
    }
    .ch-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .ch-tbl__note { display: block; font-size: 11px; color: var(--ibx-ink-3); margin-top: 2px; font-style: italic; }
    .ch-sw { display: inline-block; width: 14px; height: 14px; border-radius: 3px; border: 1px solid rgba(0,0,0,0.08); margin-right: 8px; vertical-align: -3px; }
    .ch-callout {
      background: rgba(244,124,32,0.06);
      border-left: 3px solid var(--ibx-orange);
      padding: 10px 14px;
      font-size: 12.5px;
    }
    .ch-callout code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }
    .ch-pill {
      display: inline-block; margin-left: 8px;
      font-size: 10.5px; font-weight: 600;
      padding: 2px 8px; border-radius: 100px;
      background: var(--ibx-surface-3); color: var(--ibx-ink-2);
      letter-spacing: 0.04em; text-transform: uppercase;
      vertical-align: 2px;
    }
    .ch-pill--add      { background: rgba(46,200,130,0.12); color: #207a4d; }
    .ch-pill--warn     { background: rgba(244,124,32,0.14); color: #c25c12; }
    .ch-pill--breaking { background: rgba(226,35,26,0.12); color: #c41e15; }

    /* Changelog accordion ===== */
    .ch-log { display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }
    .ch-entry {
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      background: #fff;
      overflow: hidden;
    }
    .ch-entry[open] { background: var(--ibx-surface-2); }
    summary.ch-entry__head {
      list-style: none;
      cursor: pointer;
      display: flex; gap: 12px; align-items: flex-start;
      padding: 14px 16px;
      user-select: none;
    }
    summary.ch-entry__head::-webkit-details-marker { display: none; }
    .ch-entry__chev {
      width: 16px; height: 16px;
      display: inline-flex; align-items: center; justify-content: center;
      color: var(--ibx-ink-3);
      transition: transform 200ms ease;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .ch-entry[open] .ch-entry__chev { transform: rotate(90deg); color: var(--pds-accent); }
    .ch-entry__meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; flex: 1; }
    .ch-entry__line1 { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .ch-entry__version {
      font-family: var(--ibx-mono); font-size: 11.5px; font-weight: 600;
      color: var(--pds-accent);
      background: rgba(0,112,210,0.10);
      padding: 2px 8px; border-radius: 100px;
    }
    .ch-entry__date {
      font-family: var(--ibx-mono); font-size: 11px;
      color: var(--ibx-ink-3);
    }
    .ch-entry__title { font-size: 14.5px; font-weight: 600; color: var(--ibx-ink); margin-top: 2px; }
    .ch-entry__summary { font-size: 12.5px; color: var(--ibx-ink-2); line-height: 1.45; margin-top: 1px; }

    .ch-entry__body {
      padding: 8px 18px 18px 44px;
      background: #fff;
      border-top: 1px solid var(--ibx-line);
    }
    .ch-h4 {
      font-size: 13px; font-weight: 600; color: var(--ibx-ink);
      margin: 18px 0 6px;
      display: flex; align-items: center; gap: 8px;
    }
    .ch-h4:first-child { margin-top: 12px; }
    .ch-placeholder { color: var(--ibx-ink-3); font-style: italic; padding: 8px 0; }
    .ch-list { margin: 6px 0 0; padding-left: 20px; font-size: 13px; color: var(--ibx-ink-2); line-height: 1.6; display: flex; flex-direction: column; gap: 6px; }
    .ch-list code { background: var(--ibx-surface-2); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }
    .ch-list a { color: var(--pds-accent); }
  `],
})
export class ColorPageComponent {
  groups: ColorGroup[] = PDS_COLOR_GROUPS;
  syncMeta = PDS_COLOR_SYNC_META;
  figmaUrl = pdsFigmaUrl('color');

  get totalCount(): number {
    return this.groups.reduce((n, g) => n + g.tokens.length, 0);
  }

  toc: TocItem[] = [
    { id: 'intro', label: 'Intro' },
    ...PDS_COLOR_GROUPS.map(g => ({ id: g.id, label: g.title })),
    { id: 'changelog', label: 'Changelog' },
  ];

  semanticChanges = [
    { token: 'color-text-secondary',   old: '#616161', new: '#424242' },
    { token: 'color-text-tertiary',    old: '#757575', new: '#616161' },
    { token: 'color-text-placeholder', old: '#9e9e9e', new: '#757575' },
    { token: 'color-text-disabled',    old: '#9e9e9e', new: '#bdbdbd' },
    { token: 'color-text-warning',     old: '#a97f13', new: '#7a5c00' },
    { token: 'color-text-critical',    old: '#c05700', new: '#914200' },
    { token: 'color-text-link-hover',  old: '#98cdfe', new: '#0e5aa1' },
    { token: 'color-icon-warning',     old: '#a97f13', new: '#7a5c00' },
    { token: 'color-icon-critical',    old: '#ef6c00', new: '#c05700' },
    { token: 'color-border-focused',   old: '#98cdfe', new: '#0171da' },
  ];

  pathRenames = [
    { old: 'colors/01 text/…',       new: 'colors/text/…' },
    { old: 'colors/02 background/…', new: 'colors/background/…' },
    { old: 'colors/03 border/…',     new: 'colors/border/…' },
    { old: 'colors/04 icon/…',       new: 'colors/icon/…' },
    { old: 'colors/05 graphics/…',   new: 'colors/graphics/…' },
    { old: 'colors/06 …/…',          new: 'colors/…/…' },
  ];

  /**
   * Changelog entries — most recent first. Add a new object at the top of this
   * array for each release that touches color tokens. The body content is
   * rendered conditionally on `id` (see template). For simple textual updates
   * leave `id` unset and the placeholder body renders.
   */
  changelog = [
    {
      id: '2.5.0',
      version: 'v2.5.0',
      date: '2026-05-13',
      title: 'PDS 2.0 → 2.5 release',
      summary: '10 semantic colors re-valued · gray-800 primitive shifted · color path prefixes flattened · Graphics gray ramp added.',
      tags: ['breaking', 'additive'] as ('breaking' | 'additive')[],
    },
    // Example future entries — uncomment and fill in as 2.5.x ships:
    // {
    //   id: '2.5.1',
    //   version: 'v2.5.1',
    //   date: '2026-07-02',
    //   title: 'Color · accessibility patch',
    //   summary: 'color-text-warning bumped to meet WCAG AA on warning-subtle backgrounds.',
    //   tags: ['breaking'],
    // },
  ];

  confTooltip(c?: string): string {
    return c === 'verified'
      ? 'Hex value verified from the PDS 2.0→2.5 changelog'
      : 'Hex value is a best-effort placeholder. Re-sync via npm run sync:figma when full token resolution is available.';
  }

  /** Decide whether the swatch needs a light-mode outline so it stays visible on white. */
  isLight(hex: string): boolean {
    const h = hex.replace('#', '');
    if (h.length !== 6) return false;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    // perceived luminance
    return (r * 0.299 + g * 0.587 + b * 0.114) > 235;
  }
}
