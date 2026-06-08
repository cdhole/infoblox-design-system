import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PdsButtonComponent } from '../../../ui-pds/pds-button.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { SpecTableComponent, SpecRow } from '../../../shared/spec-table.component';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { pdsFigmaUrl as figmaUrlFor } from '../pds-components';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PdsButtonComponent, CodeBlockComponent, SpecTableComponent, PageTocComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / Components / Buttons</nav>
        <h1 class="cp__title">Button</h1>
        <div class="cp__sub">&lt;ads-button&gt; · Pegasus v2.5 · 6 types · 5 states</div>
        <div class="cp__tags">
          <span class="cp__tag">Angular</span>
          <span class="cp__tag">Component Library v2.5</span>
          <span class="cp__tag">Loading · new in 2.5</span>
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
            <p class="cp__lead">Buttons trigger actions and submit choices.</p>
            <div class="preview preview--canvas" style="margin-top: 16px;">
              <pds-button variant="primary">Primary</pds-button>
              <pds-button variant="secondary">Secondary</pds-button>
              <pds-button variant="tertiary">Tertiary</pds-button>
              <pds-button variant="danger">Danger</pds-button>
            </div>
          </section>

          <section id="when-to-use">
            <h2 class="cp__h2">When to use</h2>
            <ul class="cp__bullets">
              <li><b>Button</b> — performs an action (save, submit, delete).</li>
              <li><b>Link</b> — navigates between pages.</li>
              <li>One Primary per surface. Pair with Secondary or Tertiary for hierarchy.</li>
            </ul>
          </section>

          <section id="anatomy">
            <h2 class="cp__h2">Anatomy</h2>
            <div class="anv">
              <svg class="anv-svg" viewBox="0 0 560 220" preserveAspectRatio="xMidYMid meet" aria-label="Button anatomy diagram">
                <!-- 5. Focus ring — outer dashed rect -->
                <rect x="148" y="74" width="264" height="62" rx="8" fill="none"
                      stroke="#0070d2" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.55"/>

                <!-- 1. Container — solid button rect -->
                <rect x="154" y="80" width="252" height="50" rx="4" fill="#0070d2"/>

                <!-- 2. Left icon (half-filled circle) -->
                <g transform="translate(178 105)">
                  <circle r="9" fill="none" stroke="#fff" stroke-width="1.4"/>
                  <path d="M0 -9 A 9 9 0 0 1 0 9 Z" fill="#fff"/>
                </g>

                <!-- 3. Label text -->
                <text x="266" y="110" font-family="Inter, system-ui, sans-serif"
                      font-size="14" font-weight="500" fill="#fff">Save changes</text>

                <!-- 4. Right caret -->
                <path d="M380 102 L394 102 L387 110 Z" fill="#fff"/>

                <!-- Callout 1: Container — pin above center -->
                <line x1="280" y1="34" x2="280" y2="74" stroke="#0070d2" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="280" cy="22" r="12" fill="#fff" stroke="#0070d2" stroke-width="1.4"/>
                <text x="280" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#0070d2"
                      font-family="JetBrains Mono, ui-monospace, monospace">1</text>

                <!-- Callout 2: Left icon — pin below left -->
                <line x1="178" y1="170" x2="178" y2="130" stroke="#0070d2" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="178" cy="184" r="12" fill="#fff" stroke="#0070d2" stroke-width="1.4"/>
                <text x="178" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#0070d2"
                      font-family="JetBrains Mono, ui-monospace, monospace">2</text>

                <!-- Callout 3: Label — pin below center -->
                <line x1="290" y1="170" x2="290" y2="130" stroke="#0070d2" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="290" cy="184" r="12" fill="#fff" stroke="#0070d2" stroke-width="1.4"/>
                <text x="290" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#0070d2"
                      font-family="JetBrains Mono, ui-monospace, monospace">3</text>

                <!-- Callout 4: Right icon — pin below right -->
                <line x1="387" y1="170" x2="387" y2="130" stroke="#0070d2" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="387" cy="184" r="12" fill="#fff" stroke="#0070d2" stroke-width="1.4"/>
                <text x="387" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#0070d2"
                      font-family="JetBrains Mono, ui-monospace, monospace">4</text>

                <!-- Callout 5: Focus ring — pin to the right -->
                <line x1="412" y1="105" x2="446" y2="105" stroke="#0070d2" stroke-width="1" stroke-dasharray="2 2"/>
                <circle cx="458" cy="105" r="12" fill="#fff" stroke="#0070d2" stroke-width="1.4"/>
                <text x="458" y="109" text-anchor="middle" font-size="11" font-weight="700" fill="#0070d2"
                      font-family="JetBrains Mono, ui-monospace, monospace">5</text>
              </svg>

              <ol class="anv__legend">
                <li><span class="anv-num" data-num="1"></span><div><b>Container</b><span>Background, border, radius, padding</span></div></li>
                <li><span class="anv-num" data-num="2"></span><div><b>Left icon slot</b><span>Optional · <code>show-left-icon</code></span></div></li>
                <li><span class="anv-num" data-num="3"></span><div><b>Label</b><span>Sentence case, verb-led · <code>show-label</code></span></div></li>
                <li><span class="anv-num" data-num="4"></span><div><b>Right icon slot</b><span>Optional · <code>show-right-icon</code></span></div></li>
                <li><span class="anv-num" data-num="5"></span><div><b>Focus ring</b><span>2px outline at 2px offset, keyboard-focus only</span></div></li>
              </ol>
            </div>
          </section>

          <section id="variants">
            <h2 class="cp__h2">Variants <span class="cp__count">6 types</span></h2>
            <p class="cp__p">Six type values cover the action hierarchy across Pegasus surfaces.</p>
            <div class="preview" style="margin-top: 12px;">
              <pds-button variant="primary">Primary</pds-button>
              <pds-button variant="secondary">Secondary</pds-button>
              <pds-button variant="tertiary">Tertiary</pds-button>
              <pds-button variant="primary" style="background:#2e8b57">Success</pds-button>
              <pds-button variant="danger">Danger</pds-button>
              <pds-button variant="tertiary" style="text-decoration:underline">Link</pds-button>
            </div>
            <ul class="cp__bullets">
              <li><b>Primary</b> — the single dominant action per view.</li>
              <li><b>Secondary</b> — alternative actions adjacent to the Primary.</li>
              <li><b>Tertiary</b> — low-priority actions and inline use in dense layouts.</li>
              <li><b>Success</b> — contextual confirmation. Use sparingly.</li>
              <li><b>Danger</b> — destructive actions like Delete or Revoke. Use sparingly.</li>
              <li><b>Link</b> — inline navigational triggers; renders as underlined text-only.</li>
            </ul>

            <h3 class="cp__h3">Split &amp; multi-action variants</h3>
            <p class="cp__p">Two boolean modifiers extend any Type:</p>
            <ul class="cp__bullets">
              <li><b><code>Dropdown Button</code></b> (boolean) — appends a caret-down for split/dropdown triggers.</li>
              <li><b><code>Multi Action Button</code></b> (boolean) — appends a divider + caret for multi-action patterns.</li>
            </ul>
          </section>

          <section id="sizes">
            <h2 class="cp__h2">Sizes</h2>
            <p class="cp__p">Three sizes adapt to layout density and emphasis.</p>
            <div class="preview" style="margin-top: 12px;">
              <pds-button size="sm">Small</pds-button>
              <pds-button size="md">Medium</pds-button>
              <pds-button size="lg">Large</pds-button>
            </div>
          </section>

          <section id="states">
            <h2 class="cp__h2">States <span class="cp__count">5 + Loading</span></h2>
            <p class="cp__p">
              Every variant supports the five interaction states below. <b>Loading</b> was added in
              PDS 2.5 — six additional variants across all button types.
            </p>
            <div class="state-grid">
              <div class="state"><div class="state__label">Normal</div><pds-button>Save</pds-button></div>
              <div class="state"><div class="state__label">Hover</div><pds-button style="background:#005bb0">Save</pds-button></div>
              <div class="state"><div class="state__label">Pressed</div><pds-button style="background:#004a8f">Save</pds-button></div>
              <div class="state"><div class="state__label">Focused / Active</div><pds-button style="box-shadow:0 0 0 3px rgba(0,112,210,0.4)">Save</pds-button></div>
              <div class="state"><div class="state__label">Disabled</div><pds-button [disabled]="true">Save</pds-button></div>
              <div class="state">
                <div class="state__label">Loading <span class="state__new">new · 2.5</span></div>
                <pds-button [disabled]="true">
                  <span class="state__spinner"></span> Saving…
                </pds-button>
              </div>
            </div>
          </section>

          <section id="properties">
            <h2 class="cp__h2">Properties <span class="cp__count">verified · Figma</span></h2>
            <p class="cp__p">
              All component properties as exposed by the Figma component set. The Angular implementation mirrors these one-for-one.
            </p>
            <app-spec-table [rows]="properties" />
          </section>

          <section id="tokens">
            <h2 class="cp__h2">Design tokens</h2>
            <div class="tokens">
              <div class="token"><span class="token__swatch" style="background:#0070d2"></span><span class="token__info"><span class="token__name">color-text-link / accent</span><span class="token__value">#0070D2</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#005bb0"></span><span class="token__info"><span class="token__name">primary-hover</span><span class="token__value">#005BB0</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#0171da"></span><span class="token__info"><span class="token__name">color-border-focused</span><span class="token__value">#0171DA · new 2.5</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#d32f2f"></span><span class="token__info"><span class="token__name">color-text-alert</span><span class="token__value">#D32F2F</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#2e8b57"></span><span class="token__info"><span class="token__name">color-text-success</span><span class="token__value">#2E8B57</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#fff;border:1px dashed #c4ccd6"></span><span class="token__info"><span class="token__name">radius-sm</span><span class="token__value">2px · was 4px</span></span></div>
            </div>
          </section>

          <section id="installation">
            <h2 class="cp__h2">Installation <span class="src src--code">From pds-core</span></h2>
            <p class="cp__p" style="margin-bottom:8px">
              From <a href="https://github.com/Infoblox-CTO/csp.pds-core.ui" target="_blank"><code>&#64;infoblox-cto/pds-core</code></a> · the live PDS Angular library.
            </p>
            <app-code-block language="bash" code="npm install @infoblox-cto/pds-core" />
          </section>

          <section id="usage-code">
            <h2 class="cp__h2">Usage <span class="src src--code">From pds-core</span></h2>
            <h3 class="cp__h3">Template</h3>
            <app-code-block language="html" [code]="templateCode" />
            <h3 class="cp__h3">In a component</h3>
            <app-code-block language="typescript" [code]="usageCode" />
          </section>

          <section id="api">
            <h2 class="cp__h2">API</h2>
            <app-spec-table [rows]="specs" />
          </section>

          <section id="accessibility">
            <h2 class="cp__h2">Accessibility</h2>
            <ul class="cp__bullets">
              <li><code>role="button"</code> — renders as a native <code>&lt;button&gt;</code> element.</li>
              <li><code>aria-disabled</code> is set on the Disabled state.</li>
              <li><code>tabindex="0"</code> — keyboard reachable in document order.</li>
              <li>Activate via <kbd>Enter</kbd> or <kbd>Space</kbd>.</li>
              <li>Icon-only buttons must set <code>aria-label</code>.</li>
              <li>Focus ring is 2px at 2px offset and meets WCAG AA contrast against every surface.</li>
              <li>Loading state preserves the focus ring and sets <code>aria-busy="true"</code>.</li>
            </ul>
          </section>

          <section id="do-dont">
            <h2 class="cp__h2">Do &amp; Don't</h2>
            <div class="dd-grid">
              <article class="dd dd--do">
                <header class="dd__head"><span class="dd__tick">✓</span>Do</header>
                <div class="dd__demo">
                  <pds-button variant="primary">Save</pds-button>
                  <pds-button variant="secondary">Cancel</pds-button>
                </div>
                <p class="dd__body">One Primary per surface. Pair with Secondary or Tertiary for hierarchy.</p>
              </article>
              <article class="dd dd--dont">
                <header class="dd__head"><span class="dd__cross">✕</span>Don't</header>
                <div class="dd__demo">
                  <pds-button variant="primary">Save</pds-button>
                  <pds-button variant="primary">Continue</pds-button>
                </div>
                <p class="dd__body">Stacking two Primary buttons dilutes hierarchy and confuses users.</p>
              </article>

              <article class="dd dd--do">
                <header class="dd__head"><span class="dd__tick">✓</span>Do</header>
                <div class="dd__demo">
                  <pds-button variant="primary">Save</pds-button>
                  <pds-button variant="danger">Delete</pds-button>
                </div>
                <p class="dd__body">Verb-led labels that describe the action. "Save", "Delete", "Send".</p>
              </article>
              <article class="dd dd--dont">
                <header class="dd__head"><span class="dd__cross">✕</span>Don't</header>
                <div class="dd__demo">
                  <pds-button variant="primary">OK</pds-button>
                  <pds-button variant="primary">Click here</pds-button>
                </div>
                <p class="dd__body">Vague labels like "OK", "Submit", or "Click here". Be specific.</p>
              </article>

              <article class="dd dd--do">
                <header class="dd__head"><span class="dd__tick">✓</span>Do</header>
                <div class="dd__demo dd__demo--text">
                  Read the full <a class="dd__link">documentation</a>.
                </div>
                <p class="dd__body">Use Link variant for inline navigation between pages.</p>
              </article>
              <article class="dd dd--dont">
                <header class="dd__head"><span class="dd__cross">✕</span>Don't</header>
                <div class="dd__demo dd__demo--text">
                  <a class="dd__link dd__link--strike">Delete account</a>
                </div>
                <p class="dd__body">Use a Link to perform an action. That's what a Button is for.</p>
              </article>
            </div>
          </section>

          <section id="changelog">
            <h2 class="cp__h2">Changelog</h2>
            <p class="cp__p">Button changes across Pegasus releases. Most recent first.</p>

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
                      <span *ngFor="let t of entry.tags" class="ch-pill" [class]="'ch-pill ch-pill--' + t">{{ t }}</span>
                    </div>
                    <div class="ch-entry__title">{{ entry.title }}</div>
                    <div *ngIf="entry.summary" class="ch-entry__summary">{{ entry.summary }}</div>
                  </div>
                </summary>
                <div class="ch-entry__body">
                  <ng-container *ngIf="entry.id === '2.5.0'">
                    <h4 class="ch-h4">Additive · Loading state</h4>
                    <p class="cp__p">
                      Loading state added — 6 new variants across all button types. Use it to communicate an
                      in-flight async operation. Set <code>aria-busy="true"</code>; disable interaction
                      while loading.
                    </p>

                    <h4 class="ch-h4">Structural · Placeholder icon</h4>
                    <p class="cp__p">
                      Placeholder icon changed from <code>ELLIPSE</code> → <code>FA7 Pro Regular</code> circle text node.
                      Verify Font Awesome 7 Pro Regular is available in your environment.
                    </p>

                    <h4 class="ch-h4">Cascading token updates</h4>
                    <table class="ch-tbl">
                      <thead><tr><th>Token</th><th>Old</th><th>New</th></tr></thead>
                      <tbody>
                        <tr>
                          <td><code>color-border-focused</code></td>
                          <td><span class="ch-sw" style="background:#98cdfe"></span><code>#98cdfe</code></td>
                          <td><span class="ch-sw" style="background:#0171da"></span><code>#0171da</code></td>
                        </tr>
                        <tr>
                          <td><code>radius-sm</code> <span class="ch-tbl__note">primary buttons</span></td>
                          <td><code>4px</code></td>
                          <td><code>2px</code></td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 class="ch-h4">Heads-up <span class="ch-pill ch-pill--warn">Run visual regression</span></h4>
                    <ul class="cp__bullets">
                      <li>Search every codebase for the old focus ring color <code>#98cdfe</code>.</li>
                      <li>The new focus ring is more saturated — visual contrast jump is significant.</li>
                      <li>Corner radius shifted from 4px → 2px on Primary; tighter, slightly more enterprise feel.</li>
                    </ul>
                  </ng-container>

                  <ng-container *ngIf="entry.id !== '2.5.0'">
                    <p class="cp__p ch-placeholder">
                      Notes for this entry are in draft. Edit
                      <code>button-page.component.ts → changelog[]</code> to add tables, callouts, etc.
                    </p>
                  </ng-container>
                </div>
              </details>
            </div>
          </section>

        </div>

        <aside class="cp__rail">
          <app-page-toc [items]="toc" />
        </aside>
      </div>
    </div>
  `,
  styles: [`
    .cp__count {
      display: inline-block; margin-left: 8px;
      font-family: var(--ibx-mono); font-size: 11px; font-weight: 500;
      color: var(--ibx-ink-3); background: var(--ibx-surface-2);
      padding: 2px 9px; border-radius: 100px;
      vertical-align: 3px;
    }
    .cp__bullets { margin: 8px 0 0; padding-left: 20px; font-size: 13.5px; color: var(--ibx-ink-2); line-height: 1.6; display: flex; flex-direction: column; gap: 6px; }
    .cp__bullets b { color: var(--ibx-ink); font-weight: 600; }
    .cp__bullets code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 12px; font-family: var(--ibx-mono); }
    .cp__bullets kbd {
      background: #fff; border: 1px solid var(--ibx-line); border-bottom-width: 2px;
      padding: 1px 6px; border-radius: 4px; font-family: var(--ibx-mono); font-size: 11.5px;
    }
    .figma-cite { font-size: 12.5px; color: var(--ibx-ink-3); padding: 10px 14px; background: var(--ibx-surface-2); border-radius: var(--r-sm); border: 1px solid var(--ibx-line); }
    .figma-cite a { color: var(--pds-accent); }

    .anatomy__legend { display: grid; grid-template-columns: auto 1fr; gap: 6px 12px; font-size: 13px; color: var(--ibx-ink-2); align-items: center; }
    .anatomy__legend code { background: var(--ibx-surface-2); padding: 1px 5px; border-radius: 3px; font-size: 11.5px; }
    .anatomy__num { width: 22px; height: 22px; border-radius: 100px; background: var(--pds-accent); color: #fff; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; }

    .state-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px; margin-top: 12px;
    }
    .state {
      padding: 18px 16px;
      background: #fff;
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
    }
    .state__label { font-size: 11px; font-weight: 600; color: var(--ibx-ink-3); text-transform: uppercase; letter-spacing: 0.06em; display: flex; align-items: center; gap: 8px; }
    .state__new {
      font-family: var(--ibx-mono); font-size: 9.5px; padding: 1px 6px;
      background: rgba(244,124,32,0.12); color: #c25c12;
      border-radius: 100px; letter-spacing: 0;
    }
    .state__spinner {
      display: inline-block; width: 10px; height: 10px;
      border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff;
      border-radius: 50%; animation: spin 700ms linear infinite;
      margin-right: 4px; vertical-align: -1px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* === Visual anatomy === */
    .anv {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(260px, 340px);
      gap: 32px;
      background: var(--ibx-surface-2);
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      padding: 24px 28px;
      align-items: center;
    }
    @media (max-width: 900px) { .anv { grid-template-columns: 1fr; gap: 20px; } }

    .anv-svg {
      width: 100%; height: auto;
      max-height: 240px;
      display: block;
    }

    /* Legend list */
    .anv__legend { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
    .anv__legend li { display: flex; gap: 12px; align-items: flex-start; font-size: 13px; }
    .anv__legend b { display: block; font-size: 13.5px; font-weight: 600; color: var(--ibx-ink); }
    .anv__legend span { display: block; font-size: 12px; color: var(--ibx-ink-3); margin-top: 2px; }
    .anv__legend code { background: #fff; padding: 1px 5px; border-radius: 3px; font-size: 11px; font-family: var(--ibx-mono); border: 1px solid var(--ibx-line); }

    .anv-num {
      flex-shrink: 0;
      width: 22px; height: 22px;
      background: #fff; color: var(--pds-accent);
      border: 1.5px solid var(--pds-accent);
      border-radius: 100px;
      font-size: 11px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center;
      margin-top: 1px;
      font-family: var(--ibx-mono);
    }
    .anv-num::after { content: attr(data-num); }

    /* === Visual Do / Don't === */
    .dd-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 14px; margin-top: 4px;
    }
    .dd {
      background: #fff; border: 1px solid var(--ibx-line);
      border-radius: var(--r-md); overflow: hidden;
      display: flex; flex-direction: column;
    }
    .dd--do   { border-top: 3px solid #2e8b57; }
    .dd--dont { border-top: 3px solid var(--ibx-red); }
    .dd__head {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 14px 6px;
      font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
    }
    .dd--do   .dd__head { color: #2e8b57; }
    .dd--dont .dd__head { color: var(--ibx-red); }
    .dd__tick, .dd__cross {
      width: 18px; height: 18px; border-radius: 100px;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 11px; color: #fff;
    }
    .dd__tick  { background: #2e8b57; }
    .dd__cross { background: var(--ibx-red); }
    .dd__demo {
      flex: 1;
      padding: 24px;
      background: var(--ibx-surface-2);
      border-top: 1px solid var(--ibx-line);
      border-bottom: 1px solid var(--ibx-line);
      display: flex; gap: 10px; align-items: center; justify-content: center;
      min-height: 90px; flex-wrap: wrap;
    }
    .dd__demo--text {
      font-size: 14px; color: var(--ibx-ink-2);
      justify-content: flex-start;
    }
    .dd__link { color: var(--pds-accent); text-decoration: underline; cursor: pointer; }
    .dd__link--strike { color: var(--ibx-red); }
    .dd__body { font-size: 13px; color: var(--ibx-ink-2); padding: 12px 14px; margin: 0; line-height: 1.5; }

    /* Changelog — same look as Color page */
    .ch-log { display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }
    .ch-entry { border: 1px solid var(--ibx-line); border-radius: var(--r-md); background: #fff; overflow: hidden; }
    .ch-entry[open] { background: var(--ibx-surface-2); }
    summary.ch-entry__head { list-style: none; cursor: pointer; display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; user-select: none; }
    summary.ch-entry__head::-webkit-details-marker { display: none; }
    .ch-entry__chev { width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; color: var(--ibx-ink-3); transition: transform 200ms ease; flex-shrink: 0; margin-top: 2px; }
    .ch-entry[open] .ch-entry__chev { transform: rotate(90deg); color: var(--pds-accent); }
    .ch-entry__meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; flex: 1; }
    .ch-entry__line1 { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .ch-entry__version { font-family: var(--ibx-mono); font-size: 11.5px; font-weight: 600; color: var(--pds-accent); background: rgba(0,112,210,0.10); padding: 2px 8px; border-radius: 100px; }
    .ch-entry__date { font-family: var(--ibx-mono); font-size: 11px; color: var(--ibx-ink-3); }
    .ch-entry__title { font-size: 14.5px; font-weight: 600; color: var(--ibx-ink); margin-top: 2px; }
    .ch-entry__summary { font-size: 12.5px; color: var(--ibx-ink-2); line-height: 1.45; margin-top: 1px; }
    .ch-entry__body { padding: 8px 18px 18px 44px; background: #fff; border-top: 1px solid var(--ibx-line); }
    .ch-h4 { font-size: 13px; font-weight: 600; color: var(--ibx-ink); margin: 18px 0 6px; display: flex; align-items: center; gap: 8px; }
    .ch-h4:first-child { margin-top: 12px; }
    .ch-tbl { width: 100%; border-collapse: collapse; margin: 8px 0 14px; font-size: 13px; }
    .ch-tbl th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3); font-weight: 600; padding: 8px 12px; background: var(--ibx-surface-2); border-bottom: 1px solid var(--ibx-line); }
    .ch-tbl td { padding: 10px 12px; border-bottom: 1px solid var(--ibx-line); vertical-align: middle; }
    .ch-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .ch-tbl__note { display: block; font-size: 11px; color: var(--ibx-ink-3); margin-top: 2px; font-style: italic; }
    .ch-sw { display: inline-block; width: 14px; height: 14px; border-radius: 3px; border: 1px solid rgba(0,0,0,0.08); margin-right: 8px; vertical-align: -3px; }
    .ch-pill { display: inline-block; font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 100px; background: var(--ibx-surface-3); color: var(--ibx-ink-2); vertical-align: 2px; }
    .ch-pill--additive  { background: rgba(46,200,130,0.12); color: #207a4d; }
    .ch-pill--structural{ background: rgba(107,61,245,0.10); color: #5028d0; }
    .ch-pill--visual    { background: rgba(0,112,210,0.10); color: var(--pds-accent); }
    .ch-pill--breaking  { background: rgba(226,35,26,0.12); color: #c41e15; }
    .ch-pill--warn      { background: rgba(244,124,32,0.14); color: #c25c12; }
    .ch-placeholder { color: var(--ibx-ink-3); font-style: italic; padding: 8px 0; }
  `],
})
export class ButtonPageComponent {
  figmaUrl = figmaUrlFor('buttons');

  toc: TocItem[] = [
    { id: 'intro', label: 'Intro' },
    { id: 'when-to-use', label: 'When to use' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'variants', label: 'Variants' },
    { id: 'sizes', label: 'Sizes' },
    { id: 'states', label: 'States' },
    { id: 'properties', label: 'Properties' },
    { id: 'tokens', label: 'Design tokens' },
    { id: 'installation', label: 'Installation' },
    { id: 'usage-code', label: 'Usage' },
    { id: 'api', label: 'API' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'do-dont', label: "Do & Don't" },
    { id: 'changelog', label: 'Changelog' },
  ];

  usageCode = `import { NgModule, Component } from '@angular/core';
import { PdsButtonDirective } from '@infoblox-cto/pds-core';

@Component({
  selector: 'my-feature',
  templateUrl: './my-feature.component.html',
})
export class MyFeatureComponent {
  deleting = false;
  save() { /* … */ }
  del()  { this.deleting = true; }
}

@NgModule({
  declarations: [MyFeatureComponent],
  imports: [PdsButtonDirective],
})
export class MyFeatureModule {}`;

  templateCode = `<!-- Primary action -->
<button ibPdsButton theme="primary" (click)="save()">Save</button>

<!-- Secondary action -->
<button ibPdsButton theme="secondary">Cancel</button>

<!-- Destructive action with icon -->
<button ibPdsButton theme="danger" iconLeft="fa-trash">Delete</button>

<!-- Disabled -->
<button ibPdsButton theme="primary" [disabled]="!form.valid">Submit</button>

<!-- Link variant -->
<button ibPdsButton theme="link" routerLink="/docs">Learn more</button>

<!-- Multi-action (split button) -->
<ib-pds-multi-action-button [actions]="exportActions" theme="primary">
  Save
</ib-pds-multi-action-button>`;

  /** Spec table for all properties as documented in the Figma component description. */
  properties: SpecRow[] = [
    { name: 'type',             type: "'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'link'", default: "'primary'", description: 'Visual style and hierarchy.' },
    { name: 'state',            type: "'normal' | 'hover' | 'pressed' | 'focused' | 'disabled'",           default: "'normal'",   description: 'Interaction state. Driven by user input — normally not set manually.' },
    { name: 'size',             type: "'sm' | 'md' | 'lg'",                                                 default: "'md'",       description: 'Padding and font-size scale.' },
    { name: 'label',            type: 'string',                                                             default: "'Button'",   description: 'Button text. Falls back to "Button" when empty.' },
    { name: 'show-label',       type: 'boolean',                                                            default: 'true',        description: 'Toggle the label text. Set false for icon-only buttons (provide aria-label).' },
    { name: 'show-left-icon',   type: 'boolean',                                                            default: 'false',       description: 'Show the left icon slot.' },
    { name: 'show-right-icon',  type: 'boolean',                                                            default: 'false',       description: 'Show the right icon slot.' },
    { name: 'left-icon',        type: 'IconName',                                                           default: '—',           description: 'Icon to render in the left slot (FA7 Pro Regular).' },
    { name: 'right-icon',       type: 'IconName',                                                           default: '—',           description: 'Icon to render in the right slot.' },
    { name: 'loading',          type: 'boolean',                                                            default: 'false',       description: 'NEW in 2.5. Renders a spinner; sets aria-busy="true"; disables interaction.' },
    { name: 'dropdown',         type: 'boolean',                                                            default: 'false',       description: 'Append caret-down for split/dropdown triggers.' },
    { name: 'multiAction',      type: 'boolean',                                                            default: 'false',       description: 'Append divider + caret for multi-action patterns.' },
    { name: 'disabled',         type: 'boolean',                                                            default: 'false',       description: 'Sets aria-disabled; dims appearance; blocks pointer events.' },
  ];

  /** Legacy SpecRow used by the simple API table — kept for backwards compat. */
  specs: SpecRow[] = this.properties;

  /** Changelog accordion entries — newest first. */
  changelog = [
    {
      id: '2.5.0',
      version: 'v2.5.0',
      date: '2026-05-13',
      title: 'Button · PDS 2.0 → 2.5',
      summary: 'New Loading state (6 variants) · placeholder icon swapped to FA7 Pro Regular · focus ring + corner radius updated.',
      tags: ['additive', 'structural'] as const,
    },
    // Future entries go here, e.g.:
    // {
    //   id: '2.5.1',
    //   version: 'v2.5.1',
    //   date: '2026-07-02',
    //   title: 'Button · Link variant adjustments',
    //   summary: 'Link variant underline behavior fixed on hover.',
    //   tags: ['visual'],
    // },
  ];
}
