import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { adsFigmaUrlFor } from '../ads-figma-links';
import { ADS_PACKAGE, adsSelector, adsClassName, adsStorybookUrl } from '../ads-package';
import { ADS_COMPONENTS_BY_SLUG, ADS_FIGMA_DOCS, AdsComponent, AdsFigmaDoc } from '../ads-components';

@Component({
  selector: 'app-ads-stub-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTocComponent, CodeBlockComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/ads">Aurora</a> / Components / {{ name }}</nav>
        <h1 class="cp__title">{{ name }}</h1>
        <div class="cp__sub" *ngIf="meta">Aurora EAP v1 · Figma node {{ meta.nodeId }}</div>
        <div class="cp__tags">
          <span class="cp__tag">Angular</span>
          <span class="cp__tag">EAP</span>
          <a [href]="storybookUrl" target="_blank" rel="noopener" class="cp__figma">
            <span class="cp__figma__icon" style="background:#ff4785">
              <svg width="11" height="11" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4 0H5.6C2.5 0 0 2.5 0 5.6v16.8C0 25.5 2.5 28 5.6 28h16.8c3.1 0 5.6-2.5 5.6-5.6V5.6C28 2.5 25.5 0 22.4 0z" fill="#ff4785"/>
                <path d="M19 5h-3l.2 4.5c0 .2-.3.4-.5.2L14 8.2c-.2-.1-.4 0-.5.2l-1.2 1.8c-.1.2-.4.2-.5-.1L11 6c0-.2-.2-.4-.5-.4l-2.5.4c-.2 0-.4.3-.3.5l1 18c0 .3.3.5.6.5l9.5-.5c.3 0 .5-.2.5-.5l.2-18.5c0-.3-.2-.5-.5-.5z" fill="#fff"/>
              </svg>
            </span>
            View in Storybook
            <span class="cp__figma__arrow">↗</span>
          </a>
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
            <p class="cp__lead">{{ doc?.summary || (name + ' · documented in the Aurora EAP v2 Figma file.') }}</p>
            <p *ngIf="doc?.selector" class="cp__p" style="margin-top:6px"><code>{{ doc?.selector }}</code></p>
          </section>

          <section *ngIf="doc?.whenToUse || doc?.whenNotToUse" id="when-to-use">
            <h2 class="cp__h2">When to use <span class="src">From Figma</span></h2>
            <p *ngIf="doc?.whenToUse" class="cp__p"><b>Use:</b> {{ doc?.whenToUse }}</p>
            <p *ngIf="doc?.whenNotToUse" class="cp__p" style="margin-top:6px"><b>Avoid:</b> {{ doc?.whenNotToUse }}</p>
          </section>

          <section *ngIf="(doc?.properties?.length || 0) > 0" id="properties">
            <h2 class="cp__h2">Properties <span class="src">From Figma</span></h2>
            <table class="props-tbl">
              <thead><tr><th>Name</th><th>Type</th><th>Notes</th></tr></thead>
              <tbody>
                <tr *ngFor="let p of doc?.properties">
                  <td><code>{{ p.name }}</code></td>
                  <td><code class="t">{{ p.type || '—' }}</code></td>
                  <td>{{ p.notes || '' }}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section *ngIf="doc?.accessibility" id="accessibility-doc">
            <h2 class="cp__h2">Accessibility <span class="src">From Figma</span></h2>
            <p class="cp__p">{{ doc?.accessibility }}</p>
          </section>

          <section *ngIf="(doc?.rules?.length || 0) > 0" id="rules">
            <h2 class="cp__h2">Rules <span class="src">From Figma</span></h2>
            <ul class="cp__bullets">
              <li *ngFor="let r of doc?.rules">{{ r }}</li>
            </ul>
          </section>

          <section id="installation">
            <h2 class="cp__h2">Installation</h2>
            <app-code-block language="bash" [code]="installCode" />
          </section>

          <section id="usage-code">
            <h2 class="cp__h2">Usage</h2>
            <h3 class="cp__h3">Import in a standalone component</h3>
            <app-code-block language="typescript" [code]="importCode" />
            <h3 class="cp__h3">Template</h3>
            <app-code-block language="html" [code]="templateCode" />
          </section>

          <section *ngIf="!doc" id="figma">
            <h2 class="cp__h2">Figma reference</h2>
            <p class="cp__lead" style="font-size: 14px;">
              The Figma file is the canonical spec for <b>{{ name }}</b> — anatomy, variants, sizes, and states.
              <a [href]="figmaUrl" target="_blank">Open in Figma →</a>
            </p>
          </section>

        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; --pds-accent: var(--ads-accent); }
    .cp__lead { white-space: pre-wrap; }
    .cp__lead a { color: var(--ads-accent); }
    .cp__lead code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 13px; }
    .cp__p code { background: var(--ibx-surface-2); padding: 1px 6px; border-radius: 4px; font-size: 12.5px; }
    .cp__bullets { margin: 0; padding-left: 20px; font-size: 13.5px; color: var(--ibx-ink-2); line-height: 1.55; display: flex; flex-direction: column; gap: 6px; }

    .src {
      display: inline-block; margin-left: 8px;
      font-size: 10.5px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.06em;
      padding: 2px 8px; border-radius: 100px;
      background: rgba(46,200,130,0.12); color: #207a4d;
      vertical-align: 3px;
    }

    .props-tbl { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
    .props-tbl th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3); font-weight: 600; padding: 8px 12px; background: var(--ibx-surface-2); border-bottom: 1px solid var(--ibx-line); }
    .props-tbl td { padding: 9px 12px; border-bottom: 1px solid var(--ibx-line); vertical-align: top; }
    .props-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .props-tbl code.t { color: var(--ads-accent); background: rgba(0,153,210,0.08); }
  `],
})
export class AdsStubPageComponent implements OnDestroy {
  slug = '';
  name = '';
  selector = '';
  className = '';
  figmaUrl = '';
  storybookUrl = '';
  meta?: AdsComponent;
  doc?: AdsFigmaDoc;
  installCode = `npm install ${ADS_PACKAGE.name}`;
  importCode = '';
  templateCode = '';

  get toc(): TocItem[] {
    const items: TocItem[] = [{ id: 'intro', label: 'Intro' }];
    if (this.doc?.whenToUse || this.doc?.whenNotToUse) items.push({ id: 'when-to-use', label: 'When to use' });
    if ((this.doc?.properties?.length || 0) > 0) items.push({ id: 'properties', label: 'Properties' });
    if (this.doc?.accessibility) items.push({ id: 'accessibility-doc', label: 'Accessibility' });
    if ((this.doc?.rules?.length || 0) > 0) items.push({ id: 'rules', label: 'Rules' });
    items.push({ id: 'installation', label: 'Installation' });
    items.push({ id: 'usage-code', label: 'Usage' });
    if (!this.doc) items.push({ id: 'figma', label: 'Figma reference' });
    return items;
  }
  private sub: Subscription;

  constructor(route: ActivatedRoute) {
    this.sub = route.url.subscribe(segments => {
      const slug = segments[segments.length - 1]?.path ?? '';
      this.slug = slug;
      this.meta = ADS_COMPONENTS_BY_SLUG[slug];
      this.doc = ADS_FIGMA_DOCS[slug];
      this.name = this.meta?.name ?? slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      this.selector = adsSelector(slug);
      this.className = adsClassName(slug);
      this.figmaUrl = adsFigmaUrlFor(slug);
      this.storybookUrl = adsStorybookUrl(slug);
      this.importCode = this.makeImportCode(slug);
      this.templateCode = this.makeTemplateCode(slug);
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  private makeImportCode(slug: string): string {
    const cls = adsClassName(slug);
    return `import { Component } from '@angular/core';
import { ${cls} } from '${ADS_PACKAGE.name}';

@Component({
  selector: 'my-feature',
  standalone: true,
  imports: [${cls}],
  template: \`<${adsSelector(slug)}></${adsSelector(slug)}>\`,
})
export class MyFeatureComponent {}`;
  }

  private makeTemplateCode(slug: string): string {
    const sel = adsSelector(slug);
    return `<${sel}></${sel}>`;
  }
}
