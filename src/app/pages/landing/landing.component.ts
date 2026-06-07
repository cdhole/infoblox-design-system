import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Tile {
  id: string;
  name: string;
  short: string;
  description: string;
  route: string;
  accent: string;
  glow: string;
  status: 'Active' | 'Preview' | 'Internal';
  components: number;
  badge: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page">

      <!-- ambient background layers -->
      <div class="bg" aria-hidden="true">
        <div class="bg__grid"></div>
        <div class="bg__glow bg__glow--blue"></div>
        <div class="bg__glow bg__glow--orange"></div>
        <div class="bg__glow bg__glow--purple"></div>
        <svg class="bg__network" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="line-grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stop-color="#4a9eff" stop-opacity="0"/>
              <stop offset="0.5" stop-color="#4a9eff" stop-opacity="0.45"/>
              <stop offset="1" stop-color="#4a9eff" stop-opacity="0"/>
            </linearGradient>
            <radialGradient id="node-grad">
              <stop offset="0" stop-color="#4a9eff" stop-opacity="0.9"/>
              <stop offset="1" stop-color="#4a9eff" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <g stroke="url(#line-grad)" stroke-width="0.8" fill="none">
            <line x1="120" y1="180" x2="380" y2="340"/>
            <line x1="380" y1="340" x2="720" y2="180"/>
            <line x1="720" y1="180" x2="1060" y2="340"/>
            <line x1="1060" y1="340" x2="1320" y2="180"/>
            <line x1="380" y1="340" x2="540" y2="540"/>
            <line x1="720" y1="180" x2="880" y2="540"/>
            <line x1="1060" y1="340" x2="1200" y2="540"/>
            <line x1="240" y1="540" x2="540" y2="540"/>
            <line x1="540" y1="540" x2="880" y2="540"/>
            <line x1="880" y1="540" x2="1200" y2="540"/>
          </g>
          <g fill="url(#node-grad)">
            <circle cx="120" cy="180" r="14"/>
            <circle cx="380" cy="340" r="18"/>
            <circle cx="720" cy="180" r="22"/>
            <circle cx="1060" cy="340" r="18"/>
            <circle cx="1320" cy="180" r="14"/>
            <circle cx="240" cy="540" r="12"/>
            <circle cx="540" cy="540" r="14"/>
            <circle cx="880" cy="540" r="18"/>
            <circle cx="1200" cy="540" r="12"/>
          </g>
          <g fill="#4a9eff">
            <circle cx="120" cy="180" r="2.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>
            <circle cx="380" cy="340" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" begin="0.5s" repeatCount="indefinite"/></circle>
            <circle cx="720" cy="180" r="3.5"><animate attributeName="opacity" values="0.5;1;0.5" dur="4s" begin="1s" repeatCount="indefinite"/></circle>
            <circle cx="1060" cy="340" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" begin="1.5s" repeatCount="indefinite"/></circle>
            <circle cx="1320" cy="180" r="2.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.8s" begin="2s" repeatCount="indefinite"/></circle>
            <circle cx="540" cy="540" r="2.5"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.4s" begin="0.7s" repeatCount="indefinite"/></circle>
            <circle cx="880" cy="540" r="3"><animate attributeName="opacity" values="0.4;1;0.4" dur="3.6s" begin="1.3s" repeatCount="indefinite"/></circle>
          </g>
        </svg>
      </div>

      <!-- header -->
      <header class="hdr">
        <div class="hdr__inner">
          <a routerLink="/" class="brand" aria-label="Infoblox Design System home">
            <img src="infoblox-logo.svg" alt="Infoblox" class="brand__logo" />
            <span class="brand__divider"></span>
            <span class="brand__name">Design System</span>
          </a>
          <a href="https://www.infoblox.com" target="_blank" class="hdr__back">infoblox.com ↗</a>
        </div>
      </header>

      <!-- hero -->
      <section class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">
            One design language.<br/>
            <span class="hero__title-accent">Three</span> product families.
          </h1>
          <p class="hero__lead">
            A unified home for design and code across every Infoblox surface — tokens,
            components, and patterns kept in lockstep between Figma and our Angular libraries.
          </p>
        </div>
      </section>

      <!-- tiles -->
      <section class="tiles-wrap">
        <div class="tiles">
          <a *ngFor="let t of tiles"
             [routerLink]="t.route"
             class="tile"
             [style.--tile-accent]="t.accent"
             [style.--tile-glow]="t.glow">
            <div class="tile__sheen"></div>
            <div class="tile__head">
              <div class="tile__badge">{{ t.badge }}</div>
              <span class="tile__status" [attr.data-status]="t.status">{{ t.status }}</span>
            </div>
            <div class="tile__body">
              <div class="tile__short">{{ t.short }}</div>
              <h3 class="tile__name">{{ t.name }}</h3>
              <p class="tile__desc">{{ t.description }}</p>
            </div>
            <div class="tile__foot">
              <span><b>{{ t.components }}</b> components</span>
              <span class="tile__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- principles strip -->
      <section class="strip">
        <div class="strip__inner">
          <div class="strip__item"><span class="strip__icon">◆</span><div><b>Designed in Figma</b><span>Component libraries with tokens, variants, and patterns</span></div></div>
          <div class="strip__item"><span class="strip__icon">⌨</span><div><b>Built in Angular</b><span>TypeScript types, standalone components, A11y first</span></div></div>
          <div class="strip__item"><span class="strip__icon">⇌</span><div><b>Always in sync</b><span>Design tokens flow between Figma and code</span></div></div>
          <div class="strip__item"><span class="strip__icon">✓</span><div><b>WCAG AA</b><span>Accessibility baked in at every level</span></div></div>
        </div>
      </section>

      <footer class="ftr">
        <span>© Infoblox · Design Systems team</span>
        <span>v0.1.0 · Internal preview</span>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .page {
      position: relative;
      height: 100vh;
      display: flex; flex-direction: column;
      background: var(--ibx-black);
      color: #fff;
      overflow: hidden;
      font-family: var(--ibx-font);
    }

    /* ========== AMBIENT BACKGROUND ========== */
    .bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
    .bg__grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(74,158,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(74,158,255,0.06) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(ellipse 90% 70% at 50% 35%, #000 30%, transparent 80%);
    }
    .bg__glow {
      position: absolute; width: 720px; height: 720px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.55;
      animation: drift 14s ease-in-out infinite;
    }
    .bg__glow--blue   { top: -200px; left: 8%;  background: var(--ibx-blue); opacity: 0.28; }
    .bg__glow--orange { top: 10%;    right: 8%; background: var(--ibx-green); opacity: 0.22; animation-delay: -4s; }
    .bg__glow--purple { bottom: -240px; left: 38%; background: var(--ibx-navy); opacity: 0.40; animation-delay: -8s; }
    @keyframes drift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33%      { transform: translate(40px, -30px) scale(1.05); }
      66%      { transform: translate(-30px, 40px) scale(0.95); }
    }
    .bg__network {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      opacity: 0.5;
      mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 75%);
    }

    /* ========== HEADER ========== */
    .hdr {
      position: relative; z-index: 5;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(14px) saturate(160%);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
    .hdr__inner {
      max-width: 1280px; margin: 0 auto;
      padding: 10px 28px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .brand { display: flex; align-items: center; gap: 14px; text-decoration: none; }
    .brand:hover { text-decoration: none; }
    .brand__logo { height: 24px; width: auto; display: block; filter: brightness(0) invert(1); }
    .brand__divider { width: 1px; height: 22px; background: rgba(255,255,255,0.18); }
    .brand__name { font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.78); letter-spacing: 0.01em; }
    .hdr__back { font-size: 13px; color: rgba(255,255,255,0.62); text-decoration: none; }
    .hdr__back:hover { color: #fff; text-decoration: none; }

    /* ========== HERO ========== */
    .hero { position: relative; z-index: 2; flex-shrink: 0; }
    .hero__inner {
      max-width: 1280px; margin: 0 auto;
      padding: 28px 28px 18px;
      text-align: center;
    }
    .eyebrow {
      display: inline-flex; align-items: center; gap: 9px;
      padding: 5px 14px 5px 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
      backdrop-filter: blur(10px);
      border-radius: 100px;
      font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.85);
      letter-spacing: 0.02em;
    }
    .eyebrow__dot {
      width: 7px; height: 7px; border-radius: 100px;
      background: var(--ibx-brand-red);
      box-shadow: 0 0 12px var(--ibx-brand-red), 0 0 0 4px rgba(226,35,26,0.20);
    }
    .hero__title {
      font-size: 44px; line-height: 1.05; letter-spacing: -0.025em;
      margin-top: 0;
      font-weight: 700; color: #fff;
    }
    @media (min-height: 900px) { .hero__title { font-size: 52px; } }
    .hero__title-accent {
      color: var(--ibx-green);
      filter: drop-shadow(0 4px 24px rgba(0,179,136,0.4));
    }
    .hero__lead {
      font-size: 14.5px; line-height: 1.5;
      margin: 12px auto 0;
      max-width: 580px;
      color: rgba(255,255,255,0.74);
    }
    @media (max-width: 900px) {
      .hero__title { font-size: 34px; }
      .hero__lead { font-size: 14px; }
    }

    /* ========== TILES ========== */
    .tiles-wrap { position: relative; z-index: 2; flex: 1 1 auto; display: flex; align-items: center; min-height: 0; }
    .tiles {
      max-width: 1280px; margin: 0 auto; width: 100%;
      padding: 18px 28px 18px;
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
    }
    @media (max-width: 900px) { .tiles { grid-template-columns: 1fr; padding: 18px 20px; } }

    .tile {
      position: relative; isolation: isolate;
      display: flex; flex-direction: column;
      padding: 18px 20px 16px; min-height: 180px;
      border-radius: 18px;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
      border: 1px solid rgba(255,255,255,0.10);
      backdrop-filter: blur(14px) saturate(120%);
      text-decoration: none; color: inherit;
      overflow: hidden;
      transition:
        transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
        border-color 280ms ease,
        box-shadow 280ms ease;
    }
    /* glow halo on the inside */
    .tile::before {
      content: ''; position: absolute; inset: -1px;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(135deg, var(--tile-accent), transparent 55%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      opacity: 0.55;
      pointer-events: none;
      transition: opacity 280ms ease;
    }
    /* ambient blob */
    .tile::after {
      content: ''; position: absolute;
      width: 260px; height: 260px; border-radius: 50%;
      background: radial-gradient(circle, var(--tile-glow) 0%, transparent 65%);
      top: -60%; left: -30%;
      opacity: 0.7;
      pointer-events: none;
      transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms ease;
      z-index: -1;
    }
    .tile:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.22);
      box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55), 0 0 60px -10px var(--tile-glow);
      text-decoration: none;
    }
    .tile:hover::before { opacity: 1; }
    .tile:hover::after { transform: translate(60px, 60px) scale(1.1); opacity: 1; }
    .tile:hover .tile__sheen { transform: translateX(180%); }
    .tile:hover .tile__arrow { transform: translateX(4px); }

    /* moving sheen on hover */
    .tile__sheen {
      position: absolute; top: 0; left: 0;
      width: 30%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
      transform: translateX(-180%);
      transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
      pointer-events: none;
    }

    .tile__head {
      display: flex; align-items: center; justify-content: space-between;
      position: relative; z-index: 1;
    }
    .tile__badge {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--tile-accent); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 14px; letter-spacing: -0.02em;
      box-shadow: 0 6px 20px -4px var(--tile-glow), inset 0 1px 0 rgba(255,255,255,0.3);
    }
    .tile__status {
      font-size: 11px; font-weight: 600; padding: 3px 9px; border-radius: 100px;
      letter-spacing: 0.03em;
      background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.78);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .tile__status[data-status="Active"]  { background: rgba(46,200,130,0.14); color: #50e3a4; border-color: rgba(46,200,130,0.22); }
    .tile__status[data-status="Preview"] { background: rgba(244,124,32,0.16); color: #ffb070; border-color: rgba(244,124,32,0.28); }

    .tile__body { margin-top: 12px; flex: 1; position: relative; z-index: 1; }
    .tile__short {
      font-family: var(--ibx-mono); font-size: 10.5px;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em; text-transform: uppercase;
    }
    .tile__name {
      font-size: 19px; font-weight: 600;
      margin-top: 2px; color: #fff;
      letter-spacing: -0.015em;
    }
    .tile__desc {
      margin-top: 6px;
      font-size: 13px; line-height: 1.5;
      color: rgba(255,255,255,0.66);
    }

    .tile__foot {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 12px; padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.08);
      font-size: 12px;
      color: rgba(255,255,255,0.60);
      position: relative; z-index: 1;
    }
    .tile__foot b { color: #fff; font-weight: 600; }
    .tile__arrow {
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--tile-accent); color: #fff;
      display: flex; align-items: center; justify-content: center;
      transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: 0 4px 14px -2px var(--tile-glow);
    }
    .tile__arrow svg { width: 16px; height: 16px; }

    /* ========== STRIP ========== */
    .strip {
      position: relative; z-index: 2;
      background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 100%);
      border-top: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
    .strip__inner {
      max-width: 1280px; margin: 0 auto;
      padding: 12px 28px;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
    }
    @media (max-width: 900px) { .strip__inner { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
    .strip__item {
      display: flex; gap: 10px; align-items: center;
      color: rgba(255,255,255,0.74); font-size: 12.5px;
    }
    .strip__icon {
      width: 28px; height: 28px; border-radius: 7px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
      display: inline-flex; align-items: center; justify-content: center;
      color: #4a9eff; font-size: 13px; flex-shrink: 0;
    }
    .strip__item b { display: block; color: #fff; font-weight: 600; font-size: 12.5px; }
    .strip__item span { display: block; color: rgba(255,255,255,0.55); font-size: 11.5px; margin-top: 1px; line-height: 1.3; }

    /* ========== FOOTER ========== */
    .ftr {
      position: relative; z-index: 2;
      width: 100%;
      max-width: 1280px; margin: 0 auto;
      padding: 10px 28px;
      display: flex; justify-content: space-between;
      font-size: 11.5px; color: rgba(255,255,255,0.45);
      border-top: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
  `],
})
export class LandingComponent {
  tiles: Tile[] = [
    {
      id: 'pds',
      name: 'Pegasus',
      short: 'PDS · Pegasus Design System',
      badge: 'P',
      description: 'The foundational system powering Infoblox\'s flagship NIOS and BloxOne product surfaces. Mature, comprehensive, production-ready.',
      route: '/pds',
      accent: '#0070d2',
      glow: 'rgba(0,112,210,0.55)',
      status: 'Active',
      components: 48,
    },
    {
      id: 'ads',
      name: 'Aurora',
      short: 'ADS · Aurora Design System',
      badge: 'A',
      description: 'Next-generation system for Infoblox Cloud. Built for density, dataviz, and motion-rich interaction patterns.',
      route: '/ads',
      accent: '#0099d2',
      glow: 'rgba(0,153,210,0.55)',
      status: 'Preview',
      components: 32,
    },
    {
      id: 'xds',
      name: 'Axur',
      short: 'xDS · Axur Design System',
      badge: 'X',
      description: 'The Axur threat-intelligence surface. Built for investigative workflows, data-dense layouts, dark mode first.',
      route: '/xds',
      accent: '#f47c20',
      glow: 'rgba(244,124,32,0.55)',
      status: 'Internal',
      components: 24,
    },
  ];
}
