import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PdsButtonComponent } from '../../ui-pds/pds-button.component';
import { PdsInputComponent } from '../../ui-pds/pds-input.component';
import { PdsCardComponent } from '../../ui-pds/pds-card.component';
import { PdsWhatsNewPanelComponent } from './pds-whats-new-panel.component';

@Component({
  selector: 'app-pds-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, PdsButtonComponent, PdsInputComponent, PdsCardComponent, PdsWhatsNewPanelComponent],
  template: `
    <div class="ov-shell" [class.ov-shell--with-panel]="whatsNewOpen">
    <div class="ov">

      <!-- ============ HERO ============ -->
      <section class="hero">
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Version <b>2.5</b></span>
            <span class="hero__badge-sep">·</span>
            <a href="javascript:void(0)" (click)="whatsNewOpen = !whatsNewOpen">
              {{ whatsNewLabel }}
            </a>
          </div>
          <h1 class="hero__title">
            Pegasus is the design language<br/>
            of <span class="hero__accent">Infoblox</span>.
          </h1>
          <p class="hero__lead">
            An open, evolving system of design tokens, components, and patterns that powers our
            flagship product surfaces. Built to be accessible, performant, and consistent across
            every Infoblox experience.
          </p>
          <div class="hero__cta">
            <a routerLink="components/button" class="cta cta--primary">Browse components →</a>
            <a href="https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS" target="_blank" class="cta cta--ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
              Open in Figma
            </a>
            <a href="https://github.com/Infoblox-CTO/ux-design-team/tree/main/Pegasus%20Design%20System" target="_blank" class="cta cta--ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
              View on GitHub
            </a>
          </div>
        </div>

        <div class="hero__visual" aria-hidden="true">
          <div class="hv-card hv-card--1">
            <div class="hv-card__bar"></div>
            <pds-button variant="primary" size="sm">Get started</pds-button>
          </div>
          <div class="hv-card hv-card--2">
            <div class="hv-mini"><span></span><span></span></div>
          </div>
          <div class="hv-card hv-card--3">
            <pds-input label="Search" placeholder="Find a component…" />
          </div>
          <div class="hv-card hv-card--4">
            <div class="hv-swatches">
              <span style="background:var(--pds-darker)"></span>
              <span style="background:var(--pds-deep)"></span>
              <span style="background:var(--pds-accent)"></span>
              <span style="background:var(--pds-light)"></span>
              <span style="background:var(--ibx-orange)"></span>
            </div>
            <div class="hv-label">tokens · color</div>
          </div>
          <div class="hv-grid"></div>
        </div>
      </section>

      <!-- ============ STATS STRIP ============ -->
      <section class="stats">
        <div class="stat"><strong>48</strong><span>Components</span></div>
        <div class="stat"><strong>124</strong><span>Design tokens</span></div>
        <div class="stat"><strong>WCAG AA</strong><span>Accessibility</span></div>
        <div class="stat"><strong>Angular 18</strong><span>Framework</span></div>
        <div class="stat"><strong>12</strong><span>Products using PDS</span></div>
      </section>


      <!-- ============ PRINCIPLES ============ -->
      <section class="pr">
        <div class="pr__head">
          <span class="eyebrow">Principles</span>
          <h2>How we design</h2>
        </div>
        <div class="pr__grid">
          <div class="pr-item">
            <div class="pr-item__num">01</div>
            <h3>Useful before beautiful</h3>
            <p>Every pattern starts with a real user problem. Polish comes after the workflow is clear, not before.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">02</div>
            <h3>Consistency over novelty</h3>
            <p>Users move across our products. They shouldn't have to relearn fundamentals at each surface.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">03</div>
            <h3>Accessible by default</h3>
            <p>WCAG AA is the floor, not the goal. Keyboard, screen reader, and high-contrast are first-class.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">04</div>
            <h3>Built to evolve</h3>
            <p>Tokens, not hex codes. Composition, not configuration. The system bends without breaking.</p>
          </div>
        </div>
      </section>

      <!-- ============ RESOURCES ============ -->
      <section class="rsc">
        <div class="rsc__head">
          <span class="eyebrow">Resources</span>
          <h2>Everything you need</h2>
        </div>
        <div class="rsc__grid">
          <a href="https://www.figma.com/design/ebsEG1FiXLoPMKk2VNNUHS" target="_blank" class="rsc-card">
            <div class="rsc-card__icon" style="background:#f24e1e">F</div>
            <div>
              <h4>Figma library</h4>
              <p>Components, variants, design tokens</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="https://github.com/Infoblox-CTO/ux-design-team/tree/main/Pegasus%20Design%20System" target="_blank" class="rsc-card">
            <div class="rsc-card__icon" style="background:#0b1320">G</div>
            <div>
              <h4>GitHub repository</h4>
              <p>Source code, issues, contributions</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="#" class="rsc-card">
            <div class="rsc-card__icon" style="background:#ff4785">S</div>
            <div>
              <h4>Storybook</h4>
              <p>Interactive component playground</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="#" class="rsc-card">
            <div class="rsc-card__icon" style="background:var(--pds-accent)">#</div>
            <div>
              <h4>#pegasus-ds Slack</h4>
              <p>Get help, propose changes</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
        </div>
      </section>

    </div>
      <app-pds-whats-new-panel *ngIf="whatsNewOpen"
                                [isOpen]="whatsNewOpen"
                                (closed)="whatsNewOpen = false"
                                class="ov-shell__panel" />
    </div>
  `,
  styles: [`
    :host { display: block; margin: -32px calc(-1 * clamp(24px, 3.5vw, 64px)); }

    .ov-shell {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
      transition: grid-template-columns 280ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .ov-shell--with-panel {
      grid-template-columns: minmax(0, 1fr) min(440px, 36%);
      gap: 24px;
      padding-right: clamp(16px, 2vw, 32px);
    }
    .ov-shell__panel {
      display: block;
      padding-top: 24px;
    }
    @media (max-width: 1100px) {
      .ov-shell--with-panel { grid-template-columns: minmax(0, 1fr); padding-right: 0; }
      .ov-shell__panel { padding-top: 8px; }
    }

    .ov { font-family: var(--ibx-font); color: var(--ibx-ink); background: #fff; min-width: 0; }

    .eyebrow {
      display: inline-block;
      font-size: 11px; font-weight: 600; letter-spacing: 0.10em;
      color: var(--pds-accent); text-transform: uppercase;
      background: rgba(0,112,210,0.08);
      padding: 5px 11px; border-radius: 100px;
    }
    .eyebrow--orange { color: var(--ibx-orange); background: rgba(244,124,32,0.10); }
    .eyebrow--light { color: rgba(255,255,255,0.95); background: rgba(255,255,255,0.12); }

    h2 { font-size: 28px; line-height: 1.15; margin-top: 10px; letter-spacing: -0.015em; }

    /* ===== HERO — dark navy band, infoblox.com style ===== */
    .hero {
      position: relative;
      padding: 80px 64px 72px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 56px;
      align-items: center;
      background:
        radial-gradient(ellipse at 85% 18%, rgba(0,112,210,0.32) 0%, transparent 55%),
        radial-gradient(ellipse at 12% 88%, rgba(244,124,32,0.18) 0%, transparent 50%),
        linear-gradient(180deg, #001a3d 0%, #002850 100%);
      color: #fff;
      overflow: hidden;
    }
    .hero h2, .hero h3, .hero h4 { color: #fff; }
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
      background-size: 32px 32px;
      mask-image: radial-gradient(ellipse at center, #000 0%, transparent 70%);
      pointer-events: none;
    }
    .hero__content { position: relative; z-index: 1; }
    .hero__badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 4px 12px; border-radius: 100px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
      backdrop-filter: blur(8px);
      font-size: 12px; color: rgba(255,255,255,0.85);
    }
    .hero__badge-dot { width: 6px; height: 6px; border-radius: 100px; background: #50e3a4; box-shadow: 0 0 0 4px rgba(80,227,164,0.22); }
    .hero__badge b { color: #fff; font-weight: 600; }
    .hero__badge-sep { color: rgba(255,255,255,0.24); }
    .hero__badge a { color: #fff; font-weight: 500; cursor: pointer; }
    .hero__title {
      font-size: 46px; line-height: 1.06; letter-spacing: -0.022em;
      margin-top: 18px; color: #fff; font-weight: 700;
    }
    .hero__accent {
      background: linear-gradient(120deg, var(--ibx-blue-light) 0%, #ffffff 55%, var(--ibx-orange));
      -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero__lead { font-size: 15.5px; line-height: 1.55; margin-top: 18px; max-width: 560px; color: rgba(255,255,255,0.78); }
    .hero__cta { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
    .cta {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 20px; border-radius: var(--r-sm);
      font-size: 13.5px; font-weight: 500;
      text-decoration: none; transition: all 120ms ease;
    }
    .cta--primary { background: var(--ibx-blue); color: #fff; }
    .cta--primary:hover { background: #005bb0; text-decoration: none; transform: translateY(-1px); box-shadow: 0 6px 20px -8px rgba(0,112,210,0.6); }
    .cta--ghost { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.22); backdrop-filter: blur(8px); }
    .cta--ghost:hover { background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.4); text-decoration: none; }

    /* Hero visual — floating component shards */
    .hero__visual {
      position: relative; height: 220px;
      display: none;
    }
    @media (min-width: 1100px) { .hero__visual { display: block; } }
    .hv-card {
      position: absolute;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(12px);
      border-radius: var(--r-md);
      box-shadow: 0 12px 32px -12px rgba(0,0,0,0.4);
      animation: float 6s ease-in-out infinite;
    }
    .hv-card--1 { top: 10px; left: 20px; padding: 10px 12px; width: 160px; animation-delay: 0s; }
    .hv-card--1 .hv-card__bar { height: 5px; width: 100%; background: var(--ibx-surface-3); border-radius: 100px; margin-bottom: 8px; position: relative; }
    .hv-card--1 .hv-card__bar::after { content:''; position: absolute; inset: 0 40% 0 0; background: var(--pds-accent); border-radius: 100px; }
    .hv-card--2 { top: 110px; left: 0; width: 140px; height: 80px; padding: 10px 12px; animation-delay: 0.5s; }
    .hv-card--2 .hv-mini { display: flex; flex-direction: column; gap: 5px; }
    .hv-card--2 .hv-mini span:nth-child(1) { display: block; height: 6px; width: 70%; background: var(--ibx-ink); border-radius: 100px; }
    .hv-card--2 .hv-mini span:nth-child(2) { display: block; height: 5px; width: 100%; background: var(--ibx-surface-3); border-radius: 100px; }
    .hv-card--3 { top: 30px; right: 0; width: 180px; padding: 10px 12px; animation-delay: 1s; }
    .hv-card--4 { bottom: 0; right: 30px; padding: 10px 12px; width: 150px; animation-delay: 1.5s; }
    .hv-swatches { display: flex; gap: 3px; }
    .hv-swatches span { width: 20px; height: 20px; border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05); }
    .hv-label { font-family: var(--ibx-mono); font-size: 10px; color: var(--ibx-ink-3); margin-top: 6px; }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .hv-grid {
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, var(--pds-accent) 1px, transparent 1px);
      background-size: 24px 24px;
      opacity: 0.06;
      mask-image: radial-gradient(ellipse at center, #000 0%, transparent 70%);
      z-index: -1;
    }

    /* ===== STATS STRIP — bright white card-feel between dark hero and tinted section ===== */
    .stats {
      display: grid; grid-template-columns: repeat(5, 1fr);
      padding: 36px 64px;
      background: #fff;
      color: var(--ibx-ink);
      gap: 40px;
      border-bottom: 1px solid var(--ibx-line);
    }
    .stat { display: flex; flex-direction: column; gap: 4px; }
    .stat strong { font-size: 28px; font-weight: 700; letter-spacing: -0.025em; color: var(--ibx-navy); }
    .stat span { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ibx-ink-3); }
    .stat + .stat { border-left: 1px solid var(--ibx-line); padding-left: 40px; }
    @media (max-width: 900px) {
      .stats { grid-template-columns: repeat(2, 1fr); padding: 24px 32px; gap: 20px; }
      .stat + .stat { border-left: none; padding-left: 0; }
    }

    /* ===== GET STARTED ===== */
    .qs { padding: 96px 64px; }
    .qs__head { text-align: center; margin-bottom: 48px; }
    .qs__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    @media (max-width: 1100px) { .qs__grid { grid-template-columns: repeat(2, 1fr); } }
    .qs-card {
      position: relative; display: flex; flex-direction: column;
      padding: 28px; min-height: 240px;
      background: #fff; border: 1px solid var(--ibx-line);
      border-radius: var(--r-lg);
      text-decoration: none; color: inherit;
      transition: all 180ms ease;
      overflow: hidden;
    }
    .qs-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0;
      height: 100%;
      background: var(--qs-color, transparent);
      opacity: 0;
      transition: opacity 200ms ease;
      pointer-events: none;
    }
    .qs-card--design { --qs-color: linear-gradient(180deg, rgba(0,112,210,0.04), transparent 60%); }
    .qs-card--dev    { --qs-color: linear-gradient(180deg, rgba(0,58,112,0.05), transparent 60%); }
    .qs-card--found  { --qs-color: linear-gradient(180deg, rgba(74,158,255,0.05), transparent 60%); }
    .qs-card--patt   { --qs-color: linear-gradient(180deg, rgba(244,124,32,0.04), transparent 60%); }
    .qs-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-2); border-color: transparent; text-decoration: none; }
    .qs-card:hover::before { opacity: 1; }
    .qs-card > * { position: relative; }
    .qs-card__icon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    .qs-card--design .qs-card__icon { background: rgba(0,112,210,0.12); color: var(--pds-accent); }
    .qs-card--dev    .qs-card__icon { background: rgba(0,58,112,0.12); color: var(--pds-deep); }
    .qs-card--found  .qs-card__icon { background: rgba(74,158,255,0.16); color: var(--pds-accent); }
    .qs-card--patt   .qs-card__icon { background: rgba(244,124,32,0.14); color: #c25c12; }
    .qs-card__icon svg { width: 22px; height: 22px; }
    .qs-card h3 { font-size: 18px; margin-top: 16px; }
    .qs-card p { font-size: 13.5px; margin-top: 8px; color: var(--ibx-ink-2); flex: 1; line-height: 1.55; }
    .qs-card__link { font-size: 13px; font-weight: 500; margin-top: 14px; }
    .qs-card--design .qs-card__link { color: var(--pds-accent); }
    .qs-card--dev    .qs-card__link { color: var(--pds-deep); }
    .qs-card--found  .qs-card__link { color: var(--pds-accent); }
    .qs-card--patt   .qs-card__link { color: #c25c12; }

    /* ===== FEATURED COMPONENTS ===== */
    .fc { padding: 96px 64px; }
    .fc__head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 48px; }
    .fc__head h2 { margin-top: 8px; }
    .fc__all { font-size: 14px; color: var(--pds-accent); font-weight: 500; }
    .fc__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    @media (max-width: 900px) { .fc__grid { grid-template-columns: 1fr; } }
    .fc-card {
      border: 1px solid var(--ibx-line); border-radius: var(--r-lg);
      overflow: hidden; text-decoration: none; color: inherit;
      background: #fff; display: flex; flex-direction: column;
      transition: all 180ms ease;
    }
    .fc-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-2); text-decoration: none; }
    .fc-card__demo {
      padding: 36px 24px; min-height: 160px;
      background: var(--ibx-surface-2);
      display: flex; align-items: center; justify-content: center;
      gap: 10px; flex-wrap: wrap;
      border-bottom: 1px solid var(--ibx-line);
    }
    .fc-card__demo--stack { padding: 24px; }
    .fc-card__body { padding: 20px 24px 24px; }
    .fc-card__meta { font-family: var(--ibx-mono); font-size: 11px; color: var(--ibx-ink-3); text-transform: uppercase; letter-spacing: 0.06em; }
    .fc-card h3 { font-size: 18px; margin-top: 6px; }
    .fc-card p { font-size: 13.5px; margin-top: 6px; color: var(--ibx-ink-2); }

    /* ===== FOUNDATIONS ===== */
    .fnd { padding: 96px 64px; background: var(--ibx-surface-2); }
    .fnd__head { text-align: center; margin-bottom: 56px; }
    .fnd__head p { max-width: 540px; margin: 14px auto 0; font-size: 15px; }
    .fnd__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    @media (max-width: 1000px) { .fnd__grid { grid-template-columns: repeat(2, 1fr); } }
    .fnd-card { background: #fff; border: 1px solid var(--ibx-line); border-radius: var(--r-md); padding: 24px; }
    .fnd-card__visual { height: 80px; display: flex; align-items: center; gap: 6px; margin-bottom: 18px; }
    .fnd-card__visual--color span { width: 32px; height: 32px; border-radius: 6px; }
    .fnd-card__visual--type { gap: 18px; }
    .fnd-card__visual--type .t1 { font-size: 48px; font-weight: 600; letter-spacing: -0.03em; color: var(--ibx-ink); line-height: 1; }
    .fnd-card__visual--type .t-scale { display: flex; align-items: baseline; gap: 8px; color: var(--ibx-ink-2); }
    .fnd-card__visual--space { align-items: flex-end; gap: 4px; }
    .fnd-card__visual--space .sp { background: var(--pds-accent); border-radius: 2px; }
    .fnd-card__visual--icon { gap: 12px; color: var(--ibx-ink); }
    .fnd-card__visual--icon svg { width: 28px; height: 28px; }
    .fnd-card h4 { font-size: 16px; }
    .fnd-card p { font-size: 13px; margin-top: 6px; color: var(--ibx-ink-2); }

    /* ===== PRINCIPLES — light blue-gray surface to break from white stats ===== */
    .pr {
      padding: 64px 64px;
      background: linear-gradient(180deg, #f4f7fb 0%, #eef2f8 100%);
      border-bottom: 1px solid var(--ibx-line);
    }
    .pr__head { text-align: center; margin-bottom: 40px; }
    .pr__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    @media (max-width: 1000px) { .pr__grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
    .pr-item {
      background: #fff;
      border: 1px solid var(--ibx-line);
      border-radius: var(--r-md);
      padding: 22px 20px;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }
    .pr-item:hover { transform: translateY(-2px); box-shadow: var(--shadow-1); }
    .pr-item__num {
      display: inline-flex; align-items: center; justify-content: center;
      width: 28px; height: 28px; border-radius: 100px;
      background: rgba(0,112,210,0.10); color: var(--pds-accent);
      font-family: var(--ibx-mono); font-size: 11px; font-weight: 700;
      margin-bottom: 14px;
    }
    .pr-item h3 { font-size: 15.5px; }
    .pr-item p { font-size: 13px; margin-top: 6px; color: var(--ibx-ink-2); line-height: 1.55; }

    /* ===== RESOURCES — dark navy footer-band, mirrors hero so the page closes strong ===== */
    .rsc {
      padding: 64px 64px;
      background:
        radial-gradient(ellipse at 50% 0%, rgba(0,112,210,0.20) 0%, transparent 60%),
        linear-gradient(180deg, #002850 0%, #001a3d 100%);
      color: #fff;
    }
    .rsc h2, .rsc h3 { color: #fff; }
    .rsc__head { text-align: center; margin-bottom: 32px; }
    .rsc .eyebrow { background: rgba(255,255,255,0.10); color: rgba(255,255,255,0.92); }
    .rsc__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 800px; margin: 0 auto; }
    @media (max-width: 700px) { .rsc__grid { grid-template-columns: 1fr; } }
    .rsc-card {
      display: flex; align-items: center; gap: 14px;
      padding: 16px 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(8px);
      border-radius: var(--r-md);
      text-decoration: none; color: #fff;
      transition: all 160ms ease;
    }
    .rsc-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.24); text-decoration: none; }
    .rsc-card__icon { width: 36px; height: 36px; border-radius: 8px; color: #fff; font-weight: 700; font-size: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .rsc-card h4 { font-size: 14.5px; color: #fff; }
    .rsc-card p { font-size: 12.5px; margin-top: 2px; color: rgba(255,255,255,0.68); }
    .rsc-card > div:nth-child(2) { flex: 1; }
    .rsc-card__arrow { font-size: 18px; color: rgba(255,255,255,0.55); }

    /* ===== PRODUCTS USING ===== */
    .pu {
      padding: 24px 48px;
      background: var(--ibx-navy);
      color: #fff;
      text-align: center;
    }
    .pu h2 { color: #fff; margin-top: 6px; }
    .pu__logos {
      margin-top: 14px;
      display: flex; flex-wrap: wrap; justify-content: center;
      gap: 8px 12px;
    }
    .pu__logo {
      font-family: var(--ibx-font); font-size: 12.5px; font-weight: 500;
      letter-spacing: 0.02em;
      color: rgba(255,255,255,0.7);
      padding: 4px 12px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 100px;
      transition: all 160ms ease;
    }
    .pu__logo:hover { color: #fff; border-color: rgba(255,255,255,0.4); }
  `],
})
export class PdsOverviewComponent {
  whatsNewOpen = false;

  get whatsNewLabel(): string {
    return this.whatsNewOpen ? "Hide what's new" : "What's new";
  }
}
