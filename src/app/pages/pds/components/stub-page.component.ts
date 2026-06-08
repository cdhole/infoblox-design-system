import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { PDS_COMPONENTS_BY_SLUG, pdsFigmaUrl, PdsComponent, PDS_FIGMA_DOCS, FigmaDoc } from '../pds-components';
import { PDS_CORE_API, PDS_CORE_INSTALL, PDS_CORE_PACKAGE, PDS_CORE_REPO, PdsApi } from '../pds-core-api';

@Component({
  selector: 'app-stub-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTocComponent, CodeBlockComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / Components / {{ name }}</nav>
        <h1 class="cp__title">{{ name }}</h1>
        <div class="cp__sub" *ngIf="meta">Pegasus · v2.5 · Figma node {{ meta.nodeId }}</div>
        <div class="cp__tags">
          <span class="cp__tag">Angular</span>
          <span class="cp__tag">Component Library v2.5</span>
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
            <p class="cp__lead">{{ doc?.summary || name + ' · documented in the Pegasus v2.5 Figma file.' }}</p>
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

          <section *ngIf="!doc" id="figma">
            <h2 class="cp__h2">Figma reference</h2>
            <p class="cp__lead" style="font-size: 14px;">
              The Figma file is the canonical spec for <b>{{ name }}</b> — anatomy, variants, sizes, and states.
              <a [href]="figmaUrl" target="_blank">Open in Figma →</a>
            </p>
          </section>

          <section *ngIf="api" id="install">
            <h2 class="cp__h2">Install <span class="src src--code">From pds-core</span></h2>
            <p class="cp__p" style="margin-bottom: 8px">From <a [href]="pdsCoreRepo" target="_blank"><code>{{ pdsCorePackage }}</code></a> · the live PDS Angular library:</p>
            <app-code-block language="bash" [code]="installCmd" />
          </section>

          <section *ngIf="api" id="usage">
            <h2 class="cp__h2">Usage <span class="src src--code">From pds-core</span></h2>
            <p *ngIf="api?.note" class="cp__p" style="margin-bottom: 12px">{{ api?.note }}</p>
            <h3 *ngIf="api?.module || api?.className" class="cp__h3">Module / class</h3>
            <app-code-block *ngIf="api?.module || api?.className" language="typescript" [code]="importSnippet" />
            <h3 *ngIf="api?.template" class="cp__h3" style="margin-top: 14px">Template</h3>
            <app-code-block *ngIf="api?.template" language="html" [code]="api?.template || ''" />
            <div *ngIf="(api?.companion?.length || 0) > 0" style="margin-top: 14px">
              <h3 class="cp__h3">Related</h3>
              <ul class="cp__bullets">
                <li *ngFor="let c of api?.companion">
                  <code>{{ c.selector }}</code>
                  <span *ngIf="c.className"> · <code class="t">{{ c.className }}</code></span>
                </li>
              </ul>
            </div>
          </section>

          <section *ngIf="(api?.inputs?.length || 0) > 0" id="api">
            <h2 class="cp__h2">Inputs <span class="src src--code">From pds-core</span></h2>
            <table class="props-tbl">
              <thead><tr><th>Name</th><th>Source</th></tr></thead>
              <tbody>
                <tr *ngFor="let i of api?.inputs">
                  <td><code>{{ i }}</code></td>
                  <td><code class="t">&#64;Input</code></td>
                </tr>
              </tbody>
            </table>
            <p *ngIf="(api?.outputs?.length || 0) > 0" class="cp__p" style="margin-top: 12px">
              <b>Outputs:</b>
              <span *ngFor="let o of api?.outputs; let last = last">
                <code>{{ o }}</code><span *ngIf="!last">, </span>
              </span>
            </p>
          </section>

        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
  styles: [`
    .cs {
      display: flex; gap: 12px; align-items: flex-start;
      padding: 14px 16px;
      background: var(--ibx-surface-2);
      border: 1px dashed var(--ibx-line);
      border-radius: var(--r-md);
      font-size: 14px; color: var(--ibx-ink-2); line-height: 1.55;
    }
    .cs b { color: var(--ibx-ink); font-weight: 600; }
    .cs a { color: var(--pds-accent); }
    .cs code { background: #fff; padding: 1px 6px; border-radius: 4px; font-size: 12.5px; }
    .cs__dot {
      width: 8px; height: 8px; border-radius: 100px;
      background: var(--ibx-orange);
      margin-top: 8px;
      box-shadow: 0 0 0 4px rgba(244,124,32,0.18);
      flex-shrink: 0;
    }
    .figma-cite {
      font-size: 12px; color: var(--ibx-ink-3);
      padding: 10px 14px; background: var(--ibx-surface-2);
      border-radius: var(--r-sm); border: 1px solid var(--ibx-line);
    }
    .figma-cite a { color: var(--pds-accent); }
    .cp__lead { white-space: pre-wrap; }
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
    .src--live { background: rgba(0,112,210,0.10); color: var(--pds-accent); }
    .src--code { background: rgba(0,112,210,0.10); color: var(--pds-accent); }

    .props-tbl { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
    .props-tbl th { text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ibx-ink-3); font-weight: 600; padding: 8px 12px; background: var(--ibx-surface-2); border-bottom: 1px solid var(--ibx-line); }
    .props-tbl td { padding: 9px 12px; border-bottom: 1px solid var(--ibx-line); vertical-align: top; }
    .props-tbl code { font-family: var(--ibx-mono); font-size: 11.5px; background: var(--ibx-surface-2); padding: 2px 6px; border-radius: 4px; }
    .props-tbl code.t { color: var(--pds-accent); background: rgba(0,112,210,0.06); }
  `],
})
export class StubPageComponent implements OnDestroy {
  slug = '';
  name = '';
  figmaUrl = '';
  meta?: PdsComponent;
  doc?: FigmaDoc;
  api?: PdsApi;
  pdsCorePackage = PDS_CORE_PACKAGE;
  pdsCoreRepo = PDS_CORE_REPO;
  installCmd = PDS_CORE_INSTALL;
  get importSnippet(): string {
    if (!this.api) return '';
    const importTarget = this.api.module || this.api.className || '';
    return `import { ${importTarget} } from '${PDS_CORE_PACKAGE}';\n\n@NgModule({\n  imports: [${importTarget}],\n})\nexport class FeatureModule {}`;
  }
  get toc(): TocItem[] {
    const items: TocItem[] = [{ id: 'intro', label: 'Intro' }];
    if (this.doc?.whenToUse || this.doc?.whenNotToUse) items.push({ id: 'when-to-use', label: 'When to use' });
    if ((this.doc?.properties?.length || 0) > 0) items.push({ id: 'properties', label: 'Properties' });
    if (this.doc?.accessibility) items.push({ id: 'accessibility-doc', label: 'Accessibility' });
    if ((this.doc?.rules?.length || 0) > 0) items.push({ id: 'rules', label: 'Rules' });
    if (!this.doc) items.push({ id: 'figma', label: 'Figma reference' });
    if (this.api) items.push({ id: 'install', label: 'Install' });
    if (this.api) items.push({ id: 'usage', label: 'Usage' });
    if ((this.api?.inputs?.length || 0) > 0) items.push({ id: 'api', label: 'Inputs' });
    return items;
  }
  private sub: Subscription;

  constructor(route: ActivatedRoute) {
    this.sub = route.url.subscribe(segments => {
      this.slug = segments[segments.length - 1]?.path ?? '';
      this.meta = PDS_COMPONENTS_BY_SLUG[this.slug];
      this.name = this.meta?.name ?? this.slug
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');
      this.figmaUrl = pdsFigmaUrl(this.slug);
      this.doc = PDS_FIGMA_DOCS[this.slug];
      this.api = PDS_CORE_API[this.slug];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
