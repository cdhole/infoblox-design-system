import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PdsButtonComponent } from '../../ui-pds/pds-button.component';
import { PdsInputComponent } from '../../ui-pds/pds-input.component';
import { PdsCardComponent } from '../../ui-pds/pds-card.component';

@Component({
  selector: 'app-ads-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, PdsButtonComponent, PdsInputComponent, PdsCardComponent],
  template: `
    <div class="ov">

      <section class="hero">
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Version <b>EAP 1</b></span>
            <span class="hero__badge-sep">·</span>
            <a href="#whatsnew">What's new</a>
          </div>
          <h1 class="hero__title">
            Aurora is the next-gen<br/>
            design system for <span class="hero__accent">Infoblox Cloud</span>.
          </h1>
          <p class="hero__lead">
            Built for density, dataviz, and modern interaction patterns. Aurora powers our cloud
            experiences with refined tokens, animated micro-interactions, and a component library
            tuned for complex workflows.
          </p>
          <div class="hero__cta">
            <a routerLink="components/button" class="cta cta--primary">Browse components →</a>
            <a href="https://www.figma.com/design/g8kUyLHFvuWxDgEHzO3Udc/ADS--EAP1-v2" target="_blank" class="cta cta--ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
              Open in Figma
            </a>
            <a href="https://github.com/Infoblox-CTO/ux-design-team/tree/main/Aurora%20Design%20System" target="_blank" class="cta cta--ghost">
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
              <span style="background:var(--ads-darker)"></span>
              <span style="background:var(--ads-deep)"></span>
              <span style="background:var(--ads-accent)"></span>
              <span style="background:var(--ads-light)"></span>
              <span style="background:var(--ads-soft)"></span>
            </div>
            <div class="hv-label">tokens · color</div>
          </div>
          <div class="hv-grid"></div>
        </div>
      </section>

      <section class="stats">
        <div class="stat"><strong>32</strong><span>Components</span></div>
        <div class="stat"><strong>96</strong><span>Design tokens</span></div>
        <div class="stat"><strong>WCAG AA</strong><span>Accessibility</span></div>
        <div class="stat"><strong>Angular 18</strong><span>Framework</span></div>
        <div class="stat"><strong>EAP</strong><span>Status</span></div>
      </section>

      <section class="pr">
        <div class="pr__head">
          <span class="eyebrow">Principles</span>
          <h2>How Aurora thinks</h2>
        </div>
        <div class="pr__grid">
          <div class="pr-item">
            <div class="pr-item__num">01</div>
            <h3>Density without clutter</h3>
            <p>Cloud users live in dense information. Aurora scales gracefully from comfortable to ultra-compact.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">02</div>
            <h3>Motion that informs</h3>
            <p>Every animation has a job — communicate state, guide attention, or smooth a transition. Never decoration.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">03</div>
            <h3>Dark mode is first-class</h3>
            <p>Aurora was designed light and dark from day one. Both modes share the same hierarchy and contrast guarantees.</p>
          </div>
          <div class="pr-item">
            <div class="pr-item__num">04</div>
            <h3>Built to evolve</h3>
            <p>Tokens, not hex codes. Composition, not configuration. The system bends without breaking.</p>
          </div>
        </div>
      </section>

      <section class="rsc">
        <div class="rsc__head">
          <span class="eyebrow">Resources</span>
          <h2>Everything you need</h2>
        </div>
        <div class="rsc__grid">
          <a href="https://www.figma.com/design/g8kUyLHFvuWxDgEHzO3Udc/ADS--EAP1-v2" target="_blank" class="rsc-card">
            <div class="rsc-card__icon" style="background:#f24e1e">F</div>
            <div>
              <h4>Figma library</h4>
              <p>Components, variants, design tokens</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="https://super-adventure-y72g1eq.pages.github.io/core/" target="_blank" class="rsc-card">
            <div class="rsc-card__icon" style="background:#ff4785">S</div>
            <div>
              <h4>Storybook</h4>
              <p>Interactive component playground</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="#" class="rsc-card">
            <div class="rsc-card__icon" style="background:#0b1320">G</div>
            <div>
              <h4>GitHub repository</h4>
              <p>Source code, issues, contributions</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
          <a href="#" class="rsc-card">
            <div class="rsc-card__icon" style="background:var(--ads-accent)">#</div>
            <div>
              <h4>#aurora-ds Slack</h4>
              <p>Get help, propose changes</p>
            </div>
            <span class="rsc-card__arrow">↗</span>
          </a>
        </div>
      </section>

    </div>
  `,
  styles: [`
    :host { display: block; margin: -32px calc(-1 * clamp(24px, 3.5vw, 64px)); --pds-accent: var(--ads-accent); }
    .ov { font-family: var(--ibx-font); color: var(--ibx-ink); background: #fff; }
    /* dead-section guards — keeps any leftover refs from rendering if hidden attr is dropped */
    .ov section[hidden] { display: none !important; }

    .eyebrow {
      display: inline-block;
      font-size: 11px; font-weight: 600; letter-spacing: 0.10em;
      color: var(--ads-accent); text-transform: uppercase;
      background: rgba(0,153,210,0.12);
      padding: 5px 11px; border-radius: 100px;
    }

    h2 { font-size: 28px; line-height: 1.15; margin-top: 10px; letter-spacing: -0.015em; }

    /* ===== HERO — dark navy band with Aurora cloud-blue ambient ===== */
    .hero {
      position: relative;
      padding: 80px 64px 72px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 56px;
      align-items: center;
      background:
        radial-gradient(ellipse at 85% 18%, rgba(0,153,210,0.36) 0%, transparent 55%),
        radial-gradient(ellipse at 12% 88%, rgba(226,35,26,0.16) 0%, transparent 50%),
        linear-gradient(180deg, #001a3d 0%, #003a70 100%);
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
    .hero__badge-dot { width: 6px; height: 6px; border-radius: 100px; background: var(--ads-accent); box-shadow: 0 0 0 4px rgba(0,153,210,0.22); }
    .hero__badge b { color: #fff; font-weight: 600; }
    .hero__badge-sep { color: rgba(255,255,255,0.24); }
    .hero__badge a { color: #fff; font-weight: 500; cursor: pointer; }
    .hero__title {
      font-size: 46px; line-height: 1.06; letter-spacing: -0.022em;
      margin-top: 18px; color: #fff; font-weight: 700;
    }
    .hero__accent {
      background: linear-gradient(120deg, var(--ads-light) 0%, #ffffff 55%, var(--ibx-brand-red));
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
    .cta--primary { background: var(--ads-accent); color: #fff; }
    .cta--primary:hover { background: #0086ba; text-decoration: none; transform: translateY(-1px); box-shadow: 0 6px 20px -8px rgba(0,153,210,0.6); }
    .cta--ghost { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.22); backdrop-filter: blur(8px); }
    .cta--ghost:hover { background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.4); text-decoration: none; }

    .hero__visual { position: relative; height: 220px; display: none; }
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
    .hv-card--1 .hv-card__bar { height: 5px; width: 100%; background: rgba(255,255,255,0.18); border-radius: 100px; margin-bottom: 8px; position: relative; }
    .hv-card--1 .hv-card__bar::after { content:''; position: absolute; inset: 0 40% 0 0; background: var(--ads-accent); border-radius: 100px; }
    .hv-card--2 { top: 110px; left: 0; width: 140px; height: 80px; padding: 10px 12px; animation-delay: 0.5s; }
    .hv-card--2 .hv-mini { display: flex; flex-direction: column; gap: 5px; }
    .hv-card--2 .hv-mini span:nth-child(1) { display: block; height: 6px; width: 70%; background: rgba(255,255,255,0.85); border-radius: 100px; }
    .hv-card--2 .hv-mini span:nth-child(2) { display: block; height: 5px; width: 100%; background: rgba(255,255,255,0.25); border-radius: 100px; }
    .hv-card--3 { top: 30px; right: 0; width: 180px; padding: 10px 12px; animation-delay: 1s; }
    .hv-card--4 { bottom: 0; right: 30px; padding: 10px 12px; width: 150px; animation-delay: 1.5s; }
    .hv-swatches { display: flex; gap: 3px; }
    .hv-swatches span { width: 20px; height: 20px; border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.10); }
    .hv-label { font-family: var(--ibx-mono); font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 6px; }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
    .hv-grid {
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, var(--ads-accent) 1px, transparent 1px);
      background-size: 24px 24px;
      opacity: 0.12;
      mask-image: radial-gradient(ellipse at center, #000 0%, transparent 70%);
      z-index: -1;
    }

    /* ===== STATS — bright white card-feel between dark hero and tinted principles ===== */
    .stats {
      display: grid; grid-template-columns: repeat(5, 1fr);
      padding: 36px 64px;
      background: #fff;
      color: var(--ibx-ink);
      gap: 40px;
      border-bottom: 1px solid var(--ibx-line);
    }
    .stat { display: flex; flex-direction: column; gap: 4px; }
    .stat strong { font-size: 28px; font-weight: 700; letter-spacing: -0.025em; color: var(--ads-accent); }
    .stat span { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ibx-ink-3); }
    .stat + .stat { border-left: 1px solid var(--ibx-line); padding-left: 40px; }
    @media (max-width: 900px) {
      .stats { grid-template-columns: repeat(2, 1fr); padding: 24px 32px; gap: 20px; }
      .stat + .stat { border-left: none; padding-left: 0; }
    }

    /* ===== PRINCIPLES — light cyan tint to break from white stats ===== */
    .pr {
      padding: 64px 64px;
      background: linear-gradient(180deg, #f0f9fd 0%, #e6f3fa 100%);
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
      background: rgba(0,153,210,0.12); color: var(--ads-accent);
      font-family: var(--ibx-mono); font-size: 11px; font-weight: 700;
      margin-bottom: 14px;
    }
    .pr-item h3 { font-size: 15.5px; }
    .pr-item p { font-size: 13px; margin-top: 6px; color: var(--ibx-ink-2); line-height: 1.55; }

    /* ===== RESOURCES — dark navy footer-band mirrors hero ===== */
    .rsc {
      padding: 64px 64px;
      background:
        radial-gradient(ellipse at 50% 0%, rgba(0,153,210,0.22) 0%, transparent 60%),
        linear-gradient(180deg, #003a70 0%, #001a3d 100%);
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

    /* drop unused old rules (dead but safe) */
    .qs, .wn, .fc, .fnd, .pu { display: none !important; }
    .pu h2 { color: #fff; }
    .pu__logo {
      font-family: var(--ibx-font); font-size: 18px; font-weight: 600;
      letter-spacing: 0.02em; color: rgba(255,255,255,0.65);
      padding: 8px 18px; border: 1px solid rgba(255,255,255,0.15);
      border-radius: 100px; transition: all 160ms ease;
    }
    .pu__logo:hover { color: #fff; border-color: rgba(255,255,255,0.4); }
  `],
})
export class AdsOverviewComponent {}
