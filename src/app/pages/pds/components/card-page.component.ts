import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PdsCardComponent } from '../../../ui-pds/pds-card.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { SpecTableComponent, SpecRow } from '../../../shared/spec-table.component';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { pdsFigmaUrl as figmaUrlFor } from '../pds-components';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PdsCardComponent, CodeBlockComponent, SpecTableComponent, PageTocComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / Components / Card</nav>
        <h1 class="cp__title">Card</h1>
        <div class="cp__sub">pds.Card | pds.SurfaceCard</div>
        <div class="cp__tags">
          <span class="cp__tag">Angular</span>
          <span class="cp__tag">Layout</span>
          <span class="cp__tag">Version 2.5</span>
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
            <p class="cp__lead">Surface that groups related content.</p>
            <div class="preview preview--canvas" style="margin-top: 16px;">
              <div style="width: 360px;">
                <pds-card title="DNS zone created" subtitle="2 minutes ago">
                  The zone <code>internal.infoblox.com</code> has been provisioned across all primary servers.
                </pds-card>
              </div>
            </div>
          </section>

          <section id="when-to-use">
            <h2 class="cp__h2">When to use</h2>
            <ul class="cp__bullets">
              <li>Group related content on dashboards, list views, summary screens.</li>
              <li>Avoid nesting cards more than one level deep.</li>
              <li>Use consistent elevation across cards in the same grid.</li>
            </ul>
          </section>

          <section id="anatomy">
            <h2 class="cp__h2">Anatomy</h2>
            <div class="anatomy">
              <div style="width: 360px;">
                <pds-card title="Card title" subtitle="Card subtitle">Body content of the card.</pds-card>
              </div>
              <div class="anatomy__legend">
                <span class="anatomy__num">1</span><span><b>Container</b> — background surface with radius, optional shadow</span>
                <span class="anatomy__num">2</span><span><b>Header</b> — title and optional subtitle</span>
                <span class="anatomy__num">3</span><span><b>Body</b> — the main content area</span>
              </div>
            </div>
            <div class="figma-note" style="margin-top: 20px;">
              <span>🎨</span>
              <span><b>Figma source:</b> Pegasus / Components / Card. Live sync via Figma MCP can be enabled once file access is confirmed.</span>
            </div>
          </section>

          <section id="elevation">
            <h2 class="cp__h2">Elevation</h2>
            <p class="cp__p">Three elevation levels communicate hierarchy and importance.</p>
            <div class="preview preview--canvas" style="margin-top: 16px;">
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:100%">
                <pds-card title="Flat" subtitle="No shadow" elevation="flat">
                  For grid layouts where many cards sit side by side.
                </pds-card>
                <pds-card title="Raised" subtitle="Light shadow" elevation="raised">
                  Default. Good general-purpose card for most surfaces.
                </pds-card>
                <pds-card title="Floating" subtitle="Stronger shadow" elevation="floating">
                  For emphasis — featured content, dialogs, popovers.
                </pds-card>
              </div>
            </div>
          </section>

          <section id="tokens">
            <h2 class="cp__h2">Design tokens</h2>
            <div class="tokens">
              <div class="token"><span class="token__swatch" style="background:#fff;border:1px solid #e3e8ef"></span><span class="token__info"><span class="token__name">surface</span><span class="token__value">#FFFFFF</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#fff;border:1px dashed #c4ccd6"></span><span class="token__info"><span class="token__name">radius-md</span><span class="token__value">10px</span></span></div>
              <div class="token"><span class="token__swatch" style="background:linear-gradient(135deg,#fff,#e3e8ef)"></span><span class="token__info"><span class="token__name">shadow-1</span><span class="token__value">elevation/raised</span></span></div>
            </div>
          </section>

          <section id="usage-code">
            <h2 class="cp__h2">Usage</h2>
            <app-code-block language="html" [code]="templateCode" />
          </section>

          <section id="api">
            <h2 class="cp__h2">API</h2>
            <app-spec-table [rows]="specs" />
          </section>

          <section id="do-dont">
            <h2 class="cp__h2">Do &amp; Don't</h2>
            <div class="do-dont">
              <div class="do-dont__card do-dont__card--do">
                <div class="do-dont__label">Do</div>
                <div class="do-dont__body">Use consistent elevation across cards in the same grid for a calm hierarchy.</div>
              </div>
              <div class="do-dont__card do-dont__card--dont">
                <div class="do-dont__label">Don't</div>
                <div class="do-dont__body">Don't nest cards more than one level deep — flatten the layout instead.</div>
              </div>
            </div>
          </section>

        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
})
export class CardPageComponent {
  figmaUrl = figmaUrlFor('card');
  toc: TocItem[] = [
    { id: 'intro', label: 'Intro' },
    { id: 'when-to-use', label: 'When to use' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'elevation', label: 'Elevation' },
    { id: 'tokens', label: 'Design tokens' },
    { id: 'usage-code', label: 'Usage' },
    { id: 'api', label: 'API' },
    { id: 'do-dont', label: "Do & Don't" },
  ];

  templateCode = `<pds-card
  title="DNS zone created"
  subtitle="2 minutes ago"
  elevation="raised">
  The zone <code>internal.infoblox.com</code> has been provisioned.
</pds-card>`;

  specs: SpecRow[] = [
    { name: 'title', type: 'string', default: "''", description: 'Card header title.' },
    { name: 'subtitle', type: 'string', default: "''", description: 'Optional subtitle below the title.' },
    { name: 'elevation', type: "'flat' | 'raised' | 'floating'", default: "'raised'", description: 'Shadow / border treatment.' },
  ];
}
