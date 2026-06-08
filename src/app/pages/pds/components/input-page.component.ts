import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PdsInputComponent } from '../../../ui-pds/pds-input.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { SpecTableComponent, SpecRow } from '../../../shared/spec-table.component';
import { PageTocComponent, TocItem } from '../../../shared/page-toc.component';
import { pdsFigmaUrl as figmaUrlFor } from '../pds-components';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PdsInputComponent, CodeBlockComponent, SpecTableComponent, PageTocComponent],
  styleUrls: ['../../../shared/component-page.scss'],
  template: `
    <div class="cp">
      <div class="cp__hero">
        <nav class="cp__crumbs"><a routerLink="/pds">Pegasus</a> / Components / Input</nav>
        <h1 class="cp__title">Input</h1>
        <div class="cp__sub">pds.Input | pds.TextField</div>
        <div class="cp__tags">
          <span class="cp__tag">Angular</span>
          <span class="cp__tag">Form control</span>
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
            <p class="cp__lead">Single-line text input.</p>
            <div class="preview preview--canvas" style="margin-top: 16px;">
              <div style="width: 320px;">
                <pds-input label="Email address" placeholder="you@infoblox.com" helpText="We'll never share your email." />
              </div>
            </div>
          </section>

          <section id="when-to-use">
            <h2 class="cp__h2">When to use</h2>
            <ul class="cp__bullets">
              <li><b>Input</b> — short text (name, email, search).</li>
              <li><b>Textarea</b> — multi-line content.</li>
              <li><b>Select</b> — fixed list of options.</li>
            </ul>
          </section>

          <section id="anatomy">
            <h2 class="cp__h2">Anatomy</h2>
            <div class="anatomy">
              <div style="width: 320px;">
                <pds-input label="Label" placeholder="Placeholder text" helpText="Help text appears below." />
              </div>
              <div class="anatomy__legend">
                <span class="anatomy__num">1</span><span><b>Label</b> — describes the expected value</span>
                <span class="anatomy__num">2</span><span><b>Field</b> — the text entry control</span>
                <span class="anatomy__num">3</span><span><b>Placeholder</b> — short hint about expected format</span>
                <span class="anatomy__num">4</span><span><b>Help text</b> — guidance or validation message</span>
              </div>
            </div>
            <div class="figma-note" style="margin-top: 20px;">
              <span>🎨</span>
              <span><b>Figma source:</b> Pegasus / Components / Input. Live sync via Figma MCP can be enabled once file access is confirmed.</span>
            </div>
          </section>

          <section id="states">
            <h2 class="cp__h2">States</h2>
            <p class="cp__p">Inputs reflect their current validation status with both color and help text.</p>
            <div class="preview preview--stacked" style="margin-top: 16px; gap: 20px;">
              <div style="width: 320px;"><pds-input label="Default" placeholder="Enter your name" /></div>
              <div style="width: 320px;"><pds-input label="With value" value="cdhole" /></div>
              <div style="width: 320px;"><pds-input label="Error" type="password" state="error" value="123" helpText="Password must be at least 8 characters." /></div>
              <div style="width: 320px;"><pds-input label="Success" value="cdhole@infoblox.com" state="success" helpText="Looks good!" /></div>
              <div style="width: 320px;"><pds-input label="Disabled" value="Locked value" [disabled]="true" /></div>
            </div>
          </section>

          <section id="tokens">
            <h2 class="cp__h2">Design tokens</h2>
            <div class="tokens">
              <div class="token"><span class="token__swatch" style="background:#e3e8ef"></span><span class="token__info"><span class="token__name">--ibx-line</span><span class="token__value">#E3E8EF</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#0070d2"></span><span class="token__info"><span class="token__name">focus-ring</span><span class="token__value">#0070D2 / 18%</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#d32f2f"></span><span class="token__info"><span class="token__name">error</span><span class="token__value">#D32F2F</span></span></div>
              <div class="token"><span class="token__swatch" style="background:#2e8b57"></span><span class="token__info"><span class="token__name">success</span><span class="token__value">#2E8B57</span></span></div>
            </div>
          </section>

          <section id="installation">
            <h2 class="cp__h2">Installation</h2>
            <p class="cp__p" style="margin-bottom:8px">
              Text inputs use Angular Material with PDS theming. Install
              <a href="https://github.com/Infoblox-CTO/csp.pds-core.ui" target="_blank"><code>&#64;infoblox-cto/pds-core</code></a>
              for the form-extensions module + Material peer deps.
            </p>
            <app-code-block language="bash" code="npm install @infoblox-cto/pds-core @angular/material" />
          </section>

          <section id="usage-code">
            <h2 class="cp__h2">Usage</h2>
            <p class="cp__p" style="margin-bottom:8px">
              There is no dedicated <code>&lt;ib-pds-text-field&gt;</code>. Apply PDS theming to <code>&lt;input matInput&gt;</code> inside a Material <code>&lt;mat-form-field&gt;</code>.
            </p>
            <app-code-block language="html" [code]="templateCode" />
            <h3 class="cp__h3" style="margin-top:14px">In a module</h3>
            <app-code-block language="typescript" [code]="moduleCode" />
          </section>

          <section id="api">
            <h2 class="cp__h2">API</h2>
            <app-spec-table [rows]="specs" />
          </section>

          <section id="accessibility">
            <h2 class="cp__h2">Accessibility</h2>
            <p class="cp__p">
              Each input is associated with its label via a wrapping <code>&lt;label&gt;</code> element.
              Error states are conveyed via both color and the help text — never color alone.
            </p>
          </section>

          <section id="do-dont">
            <h2 class="cp__h2">Do &amp; Don't</h2>
            <div class="do-dont">
              <div class="do-dont__card do-dont__card--do">
                <div class="do-dont__label">Do</div>
                <div class="do-dont__body">Always pair an input with a visible label. Help text clarifies expectations.</div>
              </div>
              <div class="do-dont__card do-dont__card--dont">
                <div class="do-dont__label">Don't</div>
                <div class="do-dont__body">Don't rely on placeholder text alone — it disappears on focus and fails accessibility.</div>
              </div>
            </div>
          </section>

        </div>
        <aside class="cp__rail"><app-page-toc [items]="toc" /></aside>
      </div>
    </div>
  `,
})
export class InputPageComponent {
  figmaUrl = figmaUrlFor('text-fields');
  toc: TocItem[] = [
    { id: 'intro', label: 'Intro' },
    { id: 'when-to-use', label: 'When to use' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'states', label: 'States' },
    { id: 'tokens', label: 'Design tokens' },
    { id: 'installation', label: 'Installation' },
    { id: 'usage-code', label: 'Usage' },
    { id: 'api', label: 'API' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'do-dont', label: "Do & Don't" },
  ];

  templateCode = `<!-- Standard text input -->
<mat-form-field appearance="outline">
  <mat-label>Email address</mat-label>
  <input matInput type="email" placeholder="you@infoblox.com" [(ngModel)]="email" />
  <mat-hint>We'll never share your email.</mat-hint>
</mat-form-field>

<!-- With validation error -->
<mat-form-field appearance="outline">
  <mat-label>Password</mat-label>
  <input matInput type="password" [(ngModel)]="pw" required minlength="8" #pwCtrl="ngModel" />
  <mat-error *ngIf="pwCtrl.errors?.['minlength']">Password must be at least 8 characters.</mat-error>
</mat-form-field>

<!-- Disabled -->
<mat-form-field appearance="outline">
  <mat-label>Locked field</mat-label>
  <input matInput value="cannot edit" disabled />
</mat-form-field>`;

  moduleCode = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PdsFormExtensionsModule } from '@infoblox-cto/pds-core';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, MatInputModule,
    PdsFormExtensionsModule,
  ],
})
export class MyFeatureModule {}`;

  specs: SpecRow[] = [
    { name: 'label', type: 'string', default: "''", description: 'Visible label above the input.' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Placeholder text shown when empty.' },
    { name: 'helpText', type: 'string', default: "''", description: 'Helper text below the input.' },
    { name: 'type', type: 'string', default: "'text'", description: 'HTML input type (text, email, password, etc.).' },
    { name: 'value', type: 'string', default: "''", description: 'Current value of the input.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
    { name: 'state', type: "'default' | 'error' | 'success'", default: "'default'", description: 'Validation state.' },
  ];
}
